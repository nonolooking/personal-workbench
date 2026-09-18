// Service Worker — 个人看板工作台
// 策略：缓存优先（HTML/JS/CSS/字体），网络兜底；静态资源预缓存
const VERSION = "workbench-v1";
const CORE_CACHE = [
  "./",
  "./workbench-desktop.html",
  "./manifest.webmanifest",
  "./assets/avatar.jpg",
  "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Noto+Serif+SC:wght@400;600;700;900&family=Zhi+Mang+Xing&display=swap",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => {
      // 单个失败不影响整体安装
      return Promise.allSettled(CORE_CACHE.map((u) => cache.add(u)));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Supabase / 第三方 API 永远走网络（避免缓存云端数据）
  if (url.hostname.includes("supabase.co") || url.hostname.includes("allorigins.win")) {
    return; // 不拦截，直接走网络
  }

  // 导航请求：网络优先 → 降级到缓存（保证拿到最新 HTML，离线时回退）
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(() => caches.match("./workbench-desktop.html"))
    );
    return;
  }

  // 其他 GET：缓存优先 → 网络兜底 → 缓存中找
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // 仅缓存同源成功响应
        if (res && res.status === 200 && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
