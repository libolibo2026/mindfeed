// functions/api/preview.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const seriesParam = url.searchParams.get('series');
  const excludeParam = url.searchParams.get('exclude') || '';

  if (!seriesParam) {
    return json({ error: '请选择至少一个系列' }, 400);
  }

  // 解析多个系列，如 "A,B,C" 或 "A"
  const seriesList = seriesParam
    .split(',')
    .map(s => s.trim())
    .filter(s => /^[A-J]$/.test(s));

  if (seriesList.length === 0) {
    return json({ error: '请选择有效的系列 (A-J)' }, 400);
  }

  // 解析 exclude 参数（上一次 / 历史看过的 id）
  const excludeIds = excludeParam
    .split(',')
    .map(s => parseInt(s.trim(), 10))
    .filter(n => Number.isInteger(n) && n > 0);

  try {
    const seriesPlaceholders = seriesList.map(() => '?').join(',');
    const pickedIds = new Set();
    let items = [];

    // ========== 第 1 轮：优先取“未推送”的内容 ==========
    {
      const excludeAll = Array.from(new Set(excludeIds));
      const excludeClause =
        excludeAll.length > 0
          ? ` AND id NOT IN (${excludeAll.map(() => '?').join(',')})`
          : '';

      const sql = `
        SELECT id, series_id, title, description, mood_tag, cost_time,
               author, rating, publish_year, genre
        FROM content_library
        WHERE series_id IN (${seriesPlaceholders})
          AND pushed = 0
          ${excludeClause}
        ORDER BY RANDOM()
        LIMIT 5
      `;

      const stmt = env.DB.prepare(sql).bind(...seriesList, ...excludeAll);
      const result = await stmt.all();

      for (const row of result.results) {
        if (!pickedIds.has(row.id)) {
          pickedIds.add(row.id);
          items.push(row);
        }
      }
    }

    // ========== 第 2 轮：不足 5 条，从该系列所有内容补 ==========
    if (items.length < 5) {
      const need = 5 - items.length;
      const excludeAll = Array.from(new Set([...excludeIds, ...pickedIds]));
      const excludeClause =
        excludeAll.length > 0
          ? ` AND id NOT IN (${excludeAll.map(() => '?').join(',')})`
          : '';

      const sql = `
        SELECT id, series_id, title, description, mood_tag, cost_time,
               author, rating, publish_year, genre
        FROM content_library
        WHERE series_id IN (${seriesPlaceholders})
          ${excludeClause}
        ORDER BY RANDOM()
        LIMIT ?
      `;

      const stmt = env.DB.prepare(sql).bind(...seriesList, ...excludeAll, need);
      const result = await stmt.all();

      for (const row of result.results) {
        if (!pickedIds.has(row.id)) {
          pickedIds.add(row.id);
          items.push(row);
        }
      }
    }

    // ========== 第 3 轮：还不足 5 条，从所有内容随机补 ==========
    if (items.length < 5) {
      const need = 5 - items.length;
      const excludeAll = Array.from(new Set([...excludeIds, ...pickedIds]));
      const whereClause =
        excludeAll.length > 0
          ? ` WHERE id NOT IN (${excludeAll.map(() => '?').join(',')})`
          : '';

      const sql = `
        SELECT id, series_id, title, description, mood_tag, cost_time,
               author, rating, publish_year, genre
        FROM content_library
        ${whereClause}
        ORDER BY RANDOM()
        LIMIT ?
      `;

      const stmt = env.DB.prepare(sql).bind(...excludeAll, need);
      const result = await stmt.all();

      for (const row of result.results) {
        if (!pickedIds.has(row.id)) {
          pickedIds.add(row.id);
          items.push(row);
        }
      }
    }

    return json(items, 200);
  } catch (error) {
    return json({ error: error.message }, 500);
  }
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
