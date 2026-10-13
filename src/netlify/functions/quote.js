/**
 * Netlify Function — 自托管行情 / TuShare 代理
 * ------------------------------------------------------------
 * 用途：替代 workbench-desktop.html 中易失效的公共 CORS 代理
 *       （corsproxy.io / allorigins），让可选的 TuShare 行情
 *       兜底走你自己的函数，稳定且可控。
 *
 * 部署：把本文件放到仓库的 netlify/functions/ 目录，
 *       推到 GitHub 后 Netlify 会自动识别并部署。
 *       或在 netlify.toml 中配置：
 *         [functions]
 *         directory = "netlify/functions"
 *
 * 启用：在 workbench-desktop.html 的 CONFIG.invest 里设置
 *       proxy: "/.netlify/functions/quote?url="
 *       留空则继续回退到公共代理。
 *
 * 接口：
 *   1) 通用代理（转发任意 GET）：
 *      /.netlify/functions/quote?url=<encodeURIComponent(target)>
 *      可选 &referer=<...> 设置 Referer 头（东财基金等需要）
 *   2) TuShare 代理（POST 到 api.tushare.pro）：
 *      /.netlify/functions/quote?tushare=1&api=<api_name>&token=<token>
 *        &params=<json>&fields=<csv>
 *       token 也可通过环境变量 TUSHARE_TOKEN 注入（更安全）。
 */

exports.handler = async (event) => {
  const q = event.queryStringParameters || {};
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  };

  try {
    // ---- TuShare 代理 ----
    if (q.tushare === "1") {
      const token = q.token || process.env.TUSHARE_TOKEN || "";
      if (!token) {
        return { statusCode: 400, headers, body: JSON.stringify({ code: 400, msg: "missing token" }) };
      }
      const body = JSON.stringify({
        api_name: q.api || "daily",
        token,
        params: q.params ? JSON.parse(q.params) : {},
        fields: q.fields || undefined,
      });
      const r = await fetch("https://api.tushare.pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const j = await r.json();
      return { statusCode: 200, headers, body: JSON.stringify(j) };
    }

    // ---- 通用代理 ----
    const target = q.url;
    if (!target) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "missing url param" }) };
    }
    const r = await fetch(target, {
      headers: q.referer ? { Referer: q.referer } : {},
    });
    const text = await r.text();
    return {
      statusCode: 200,
      headers: {
        ...headers,
        "Content-Type": r.headers.get("content-type") || "application/json; charset=utf-8",
      },
      body: text,
    };
  } catch (e) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: String(e) }) };
  }
};
