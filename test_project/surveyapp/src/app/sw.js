const { ClientRequest } = require("http");

if ('function' === typeof importScripts) {
  importScripts('ngsw-worker.js');

  /*   addEventListener('updatefound', function (event) {
      console.log('pdt');
      console.log(event);
    }); */

  addEventListener("push", function (event) {
    console.log(event);
    event.notification.close();
    event.waitUntil(
      clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(function (clients) {
        clients.navigate('https://example.com');
      }));

    });

    /*   addEventListener('fetch', event => {
        console.log('fetch');
        console.log(event);
      }); */

  }
