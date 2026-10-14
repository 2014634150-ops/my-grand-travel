const CACHE_NAME = "manyou90-shell-v1";
const SHELL_FILES = [
  "/",
  "/index.html",
  "/styles.css",
  "/guides.js",
  "/app.js",
  "/pwa.js",
  "/manifest.webmanifest",
  "/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(SHELL_FILES);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith("manyou90-shell-") && name !== CACHE_NAME).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const cachePromise = caches.open(CACHE_NAME);
  const cachedResponse = cachePromise.then((cache) => cache.match(request));
  event.waitUntil(cachedResponse.then((cached) => {
    if (!cached) return undefined;
    return fetch(request).then(async (response) => {
      if (response.ok && response.type === "basic") await (await cachePromise).put(request, response.clone());
    }).catch(() => undefined);
  }));

  event.respondWith((async () => {
    const cache = await cachePromise;
    const cached = await cachedResponse;
    if (cached) return cached;

    try {
      const response = await fetch(request);
      if (response.ok && response.type === "basic") await cache.put(request, response.clone());
      return response;
    } catch (error) {
      if (request.mode === "navigate") {
        return (await cache.match("/")) || (await cache.match("/index.html")) || new Response("离线版本尚未准备好。请联网打开一次此网站，再重新尝试。", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
      }
      return new Response("此内容尚未缓存。请联网打开一次此网站后再试。", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
  })());
});
