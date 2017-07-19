import { Injectable } from '@angular/core'
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';

@Injectable()
export class Ng2Cable {
  public cable: any;
  public subscription: any;
  public actionCable = ActionCable;

  constructor(private broadcaster: Broadcaster) {
  }

  subscribe(url:string, channel:string, params={}) {
    this.setCable(url);
    let subscriptionParams = Object.assign({ channel: channel }, params);
    this.subscription = this.cable.subscriptions.create(subscriptionParams, {
      received: (data:any) => {
        this.broadcaster.broadcast((data.action || channel), data);
      }
    });
  }

  setCable(url:string): void {
    this.cable = ActionCable.createConsumer(url);
  }

  unsubscribe() {
    this.cable.subscriptions.remove(this.subscription);
  }
}
