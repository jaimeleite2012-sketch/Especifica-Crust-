const CACHE_NAME = "crust-qualidade-v26-github-sync";
const ASSETS = [
  "./",
  "./index.html?v=26-github-sync",
  "./style.css?v=26-github-sync",
  "./app.js?v=26-github-sync",
  "./manifest.webmanifest?v=26-github-sync",
  "./data/especificacao-crust-rev23.json",
  "./data/crust-sync-store.json",
  "./assets/icon.svg"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS.map(asset => new Request(asset, { cache: "reload" }))))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const isGithubApi = url.hostname === "api.github.com";
  const isHtml = event.request.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html");

  if (isGithubApi || isHtml) {
    event.respondWith(fetch(event.request, { cache: "no-store" }).catch(() => caches.match("./index.html?v=26-github-sync")));
    return;
  }

  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => null);
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
