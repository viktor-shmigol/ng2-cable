import { Injectable } from '@angular/core'
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';

@Injectable()
export class Ng2Cable {
  public cable: any;
  public subscription: any;

  constructor(private broadcaster: Broadcaster) {
  }

  subscribe(url, channel) {
    this.cable = ActionCable.createConsumer(url);
    this.subscription = this.cable.subscriptions.create(channel, {
      received: (data)=> {
        this.broadcaster.broadcast((data.action || channel), data);
      }
    });
  }

  unsubscribe() {
    this.cable.subscriptions.remove(this.subscription);
  }
}
