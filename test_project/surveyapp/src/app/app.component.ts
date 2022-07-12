import { Component, HostListener, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { SwPush, SwUpdate, } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'surveyapp';
  newWorker: any;

  constructor(
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private eventM:EventManager
  ) {

  }
  ngOnInit(): void {
    this.test();
    this.svtesting();
  }

  public readonly VAPID_PUBLIC_KEY = "BPdDzMmfVl7rWJ-lZwt1Y_w4_wIPxfQWUQuVqAyE_Yq8TSiFMKYrPKXWvxI7rctXHy03svJ3zapZsdTVr8VmHeo";
  test() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        const strToken = JSON.stringify(sub, null, 2);
        console.log(strToken);

      }).catch(err => console.error("Could not subscribe to notifications", err));
  }

  svtesting() {

      /* foo bar */
/*     navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('SW test!', reg)
        self.addEventListener('install', event => {
          console.log('V1 installing…');
        });
        self.addEventListener('activate', event => {
          console.log('V1 now ready to handle fetches!');
        });
        self.addEventListener('fetch', event => {
          console.log(event);
          console.log('Hola mundo');
        });
        self.addEventListener('updatefound', event => {
          this.newWorker = reg.installing;
          console.log(this.newWorker.state);
          this.newWorker.addEventListener('statechange', () => {
            console.log('estado cambiado');
          });

        });

        self.addEventListener('push', function (event) {
          console.log('Hola mundo');
        });

      })
      .catch(err => console.log('Boo!', err));

 */


      /* this.eventM.getZone().runOutsideAngular(()=>{

      }); */

     /* navigator.serviceWorker.ready.then(function (registration) {
      registration.getNotifications().then(function (notifications) {
        console.log('notif');
        console.log(notifications);
      });

      self.addEventListener('updatefound', function (event) {
        console.log('pdt');
        console.log(event);
      });
      self.addEventListener("push", function (event) {
        console.log('push', event);
      });

      self.addEventListener('show', event => {
        console.log('notifs');
        console.log(event);
      });
    }); */
  }

}
