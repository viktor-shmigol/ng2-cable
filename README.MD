[![](https://img.shields.io/badge/npm-v4.1.2-brightgreen.svg)](https://www.npmjs.com/package/ng2-cable)

<p align="center">
  <img src='http://i.imgur.com/hicMwNW.png' alt='ng-cable logoe'/>
</p>

> Easily integrate Rails [ActionCable](https://github.com/rails/actioncable/tree/archive) into your Angular2/4/ionic3 application.

## Demo
[https://ng2-cable-example.herokuapp.com](https://ng2-cable-example.herokuapp.com)

[https://github.com/viktor-shmigol/ng2-cable-example](https://github.com/viktor-shmigol/ng2-cable-example)

[https://github.com/viktor-shmigol/ng2-cable-ionic3-example](https://github.com/viktor-shmigol/ng2-cable-ionic3-example)

## Blog
[How easily integrate Rails' ActionCable into your Angular2/4/ionic2 application](https://blog.active-bridge.com/how-easily-integrate-rails-actioncable-into-your-angular2-ionic2-application)

## Install

```bash
npm install ng2-cable --save
```
And if we use the SystemJS loader, we would have to add our library to the config.js file like this:

    System.config({
        paths: {
          'ng2-cable': 'node_modules/ng2-cable/index.js',
          'actioncable': 'node_modules/actioncable/lib/assets/compiled/action_cable.js'
        }
    });


## Usage
  1. Add Ng2CableModule into your AppModule class. `app.module.ts` would look like this:

    import {NgModule} from '@angular/core';
    import { Ng2CableModule } from 'ng2-cable';

    @NgModule({
      imports: [Ng2CableModule],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
    })
    export class AppModule { }

  2. app.ts

    import { Component } from '@angular/core';
    import { Ng2Cable, Broadcaster } from 'ng2-cable';

    @Component({
      moduleId: module.id,
      selector: 'sd-app',
      templateUrl: 'app.component.html'
    })

    export class AppComponent {
      constructor(private ng2cable: Ng2Cable,
                  private broadcaster: Broadcaster) {
          this.ng2cable.subscribe('http://example.com/cable', 'ChatChannel', { room: 'My room' });
          //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

          this.broadcaster.on<string>('ChatChannel').subscribe(
            message => {
              console.log(message);
            }
          );
        }
      }

## API Ng2-cable

**.subscribe(url, channel, params)**

Method allows to subscribe to a channel.

**.unsubscribe()**

Method allows to unsubscribe from a channel.

**.setCable(url)**

Method allows to connect consumer

**.actionCable**
Returns ActionCable.

So you can use it like on rails side:
        
    
    import { Component } from '@angular/core';
    import { Ng2Cable } from 'ng2-cable';
    
    @Component({
      selector: 'sd-app',
      templateUrl: 'app.component.html'
    })
    
    export class AppComponent {
      cable:any;
      
      constructor(private ng2cable: Ng2Cable) {
        this.cable = this.ng2cable.actionCable.createConsumer("ws://cable.example.com");
        this.cable.subscriptions.create('ChatChannel', {
          received: (data:any) => {
            console.log('DATA', data)
          }
        });
      }
    }

## API Broadcaster

**.on<string>('Name')**

Method allows to subscribe to a event.

**.broadcast('event', object)**

Method allows to broadcast event.
