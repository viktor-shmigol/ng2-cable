import { Injectable } from '@angular/core'
import ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';

@Injectable()
export class Ng2Cable {
  public cable: any;
  public subscription: any;
  public actionCable = ActionCable;

  constructor(private broadcaster: Broadcaster) {
  }

  subscribe(url, channel) {
    this.setCable(url);
    this.subscription = this.cable.subscriptions.create(channel, {
      received: (data) => {
        this.broadcaster.broadcast((data.action || channel), data);
      }
    });
  }

  setCable(url): void {
    this.cable = ActionCable.createConsumer(url);
  }

  unsubscribe() {
    this.cable.subscriptions.remove(this.subscription);
  }
}
