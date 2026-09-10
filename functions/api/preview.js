// functions/api/preview.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const seriesParam = url.searchParams.get('series');

  if (!seriesParam) {
    return new Response(JSON.stringify({ error: '请选择至少一个系列' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 解析多个系列，如 "A,B,C" 或 "A"
  const seriesList = seriesParam
    .split(',')
    .map(s => s.trim())
    .filter(s => /^[A-J]$/.test(s));

  if (seriesList.length === 0) {
    return new Response(JSON.stringify({ error: '请选择有效的系列 (A-J)' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const placeholders = seriesList.map(() => '?').join(',');

    // 从选中的系列随机取 5 条未推送内容
    const stmt = env.DB.prepare(
      `SELECT series_id, title, description, mood_tag, cost_time, 
              author, rating, publish_year, genre
       FROM content_library 
       WHERE series_id IN (${placeholders}) AND pushed = 0 
       ORDER BY RANDOM() 
       LIMIT 5`
    ).bind(...seriesList);
    const result = await stmt.all();
    let items = result.results;

    // 不足 5 条，从已推送的补
    if (items.length < 5) {
      const need = 5 - items.length;
      const fallbackStmt = env.DB.prepare(
        `SELECT series_id, title, description, mood_tag, cost_time, 
                author, rating, publish_year, genre
         FROM content_library 
         WHERE series_id IN (${placeholders})
         ORDER BY RANDOM() 
         LIMIT ?`
      ).bind(...seriesList, need);
      const fallbackResult = await fallbackStmt.all();
      items = [...items, ...fallbackResult.results];
    }

    // 还不足 5 条，从所有内容随机补
    if (items.length < 5) {
      const need = 5 - items.length;
      const extraStmt = env.DB.prepare(
        `SELECT series_id, title, description, mood_tag, cost_time, 
                author, rating, publish_year, genre
         FROM content_library 
         ORDER BY RANDOM() 
         LIMIT ?`
      ).bind(need);
      const extraResult = await extraStmt.all();
      items = [...items, ...extraResult.results];
    }

    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
