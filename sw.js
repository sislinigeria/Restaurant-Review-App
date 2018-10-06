// SW script 
// Registered in js/main.js.
const staticCacheName = 'restaurant-reviews-app-cache-v1'

// On install, code reates cache with provided name.
self.addEventListener('install', e => {
  console.log('Service worker is now installed!');

  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('Service worker caching files!');

      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/img/favicon.png'
      ]);
    }).catch(err => {
      console.log(`Install failed due to ${err}`);
    })
  );
});

self.addEventListener('fetch', e => {
  // event.respondWith() method prevents default fetch event.
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
