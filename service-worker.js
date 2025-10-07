const CACHE_NAME = "orion-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/src/style.css",
  "/src/home.js",
  "/src/sort/sort.html",
  "/src/sort/sortLogic.js",
  "/src/array/array.html",
  "/public/icons/icon-192.png",
  "/public/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
