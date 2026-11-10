/* 个人工作台 Service Worker —— 单文件应用离线缓存 */
const CACHE = "wb-v7";
const ASSETS = ["./", "./workbench-desktop.html", "./manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin !== self.location.origin) return; // 外部资源（CDN/API）走网络

  // 页面导航：网络优先，离线才回退缓存 —— 保证代码更新能及时到达
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request)
        .then((resp) => {
          const cp = resp.clone();
          caches.open(CACHE).then((c) => c.put(e.request, cp));
          return resp;
        })
        .catch(() =>
          caches.match(e.request)
            .then((r) => r || caches.match("./workbench-desktop.html"))
            .then((r) => r || new Response("离线不可用", { status: 503 }))
        )
    );
    return;
  }

  // 其他静态资源：缓存优先 + 后台静默更新（stale-while-revalidate）
  e.respondWith(
    caches.match(e.request).then((r) => {
      const net = fetch(e.request)
        .then((resp) => {
          const cp = resp.clone();
          caches.open(CACHE).then((c) => c.put(e.request, cp));
          return resp;
        })
        .catch(() => r);
      return r || net;
    })
  );
});
