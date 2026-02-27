const CACHE = 'civique-v2';
const BASE = self.location.pathname.replace(/sw\.js$/, '');
const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'questions.js',
  BASE + 'app.js',
  BASE + 'manifest.json',
  BASE + 'icon.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
