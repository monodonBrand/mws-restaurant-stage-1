{
  const cacheName = 'contentCache';

  addEventListener('install', event => {
    event.waitUntil(
      caches.open(cacheName)
        .then(myCache => {
          myCache.addAll([
            '/img/1-800.jpg',
            '/img/2-800.jpg',
            '/img/3-800.jpg',
            '/img/4-800.jpg',
            '/img/5-800.jpg',
            '/img/6-800.jpg',
            '/img/7-800.jpg',
            '/img/8-800.jpg',
            '/img/9-800.jpg',
            '/img/10-800.jpg'
          ]);

          return myCache.addAll([
            '/',
            '/index.html',
            '/restaurant.html',
            '/restaurant.html?id=1',
            '/restaurant.html?id=2',
            '/restaurant.html?id=3',
            '/restaurant.html?id=4',
            '/restaurant.html?id=5',
            '/restaurant.html?id=6',
            '/restaurant.html?id=7',
            '/restaurant.html?id=8',
            '/restaurant.html?id=9',
            '/restaurant.html?id=10',
            '/js/main.js',
            '/js/dbhelper.js',
            '/js/restaurant_info.js',
            '/css/styles.css',
            '/data/restaurants.json'
          ]);
        })
    );
  });

  addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    )
  });
}
