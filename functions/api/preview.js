// functions/api/preview.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const seriesId = url.searchParams.get('series');

  // 校验系列参数
  if (!seriesId || !/^[A-J]$/.test(seriesId)) {
    return new Response(JSON.stringify({ error: '请选择有效的系列 (A-J)' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // 查询该系列 5 条未推送的内容
    let stmt = env.DB.prepare(
      `SELECT series_id, title, description, mood_tag, cost_time, author, rating, publish_year, genre
       FROM content_library 
       WHERE series_id = ? AND pushed = 0 
       ORDER BY RANDOM() 
       LIMIT 5`
    ).bind(seriesId);
    let result = await stmt.all();
    let items = result.results;

    // 如果不足5条，从已推送的补充
    if (items.length < 5) {
      const need = 5 - items.length;
      const fallbackStmt = env.DB.prepare(
        `SELECT series_id, title, description, mood_tag, cost_time, author, rating, publish_year, genre
         FROM content_library 
         WHERE series_id = ? 
         ORDER BY RANDOM() 
         LIMIT ?`
      ).bind(seriesId, need);
      const fallbackResult = await fallbackStmt.all();
      items = [...items, ...fallbackResult.results];
    }

    // 如果还不足5条，从所有内容随机补
    if (items.length < 5) {
      const need = 5 - items.length;
      const extraStmt = env.DB.prepare(
        `SELECT series_id, title, description, mood_tag, cost_time, author, rating, publish_year, genre
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
