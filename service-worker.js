var cacheName = 'Marvel News';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './generic.html',

        './assets/css/main.css',
        './assets/css/noscript.css',
        './assets/css/images/close.svg',

        './assets/js/jquery.min.js',
        './assets/js/main.js',
        './assets/js/util.js',

        './images/avengers_wallpaper.jpg',
        './images/Marvel_Logo.svg.jpg',
        './images/tony-starkk.jpg',
        './images/capitao-americaa.jpg',
        './images/thor.jpg',
        './images/cavaleiro_da_lua.png',
        './images/she-hulk.jpg',
        './images/demolidor.jpg',
        './images/loki.jpg',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/
  

});

