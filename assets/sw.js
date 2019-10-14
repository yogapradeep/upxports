self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('airhorner').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          'assets/css/main.css',
          'assets/css/bulma.min.css',
          'assets/css/icons.css'
        ]);
      })
    );
});



self.addEventListener('fetch', function(event) {

    console.log(event.request.url);

    event.respondWith(

    caches.match(event.request).then(function(response) {

    return response || fetch(event.request);

    })

    );

    });