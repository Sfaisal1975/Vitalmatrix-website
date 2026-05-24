var CACHE = 'vm-v1';
var FILES = [
  '/S8_Homepage_2026-04-13.html',
  '/hero-bg.webp',
  '/VM_Logo_1000_x_1000_px_png_New_Transparent.png',
  '/vm-phase1-design.css',
  '/vm-phase1-design.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(FILES); }));
});

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); }));
});
