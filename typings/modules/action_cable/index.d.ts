declare module ActionCable {
  interface Channel {
    unsubscribe(): void;
    perform(action: string, data: {}): void;
  }

  interface Subscriptions {
    create(chan_name: string, obj: CreateMixin): Channel;
  }

  interface Cable {
    subscriptions: Subscriptions;
  }

  interface CreateMixin {
    connected?(): void;
    disconnected?(): void;
    received(obj: any): void;
    [key: string]: Function;
  }

  function createConsumer(): Cable;
  function createConsumer(url: string): Cable;
}

declare interface AppInterface {
  cable?: ActionCable.Cable;
  network?: ActionCable.Channel;
}

declare var App: AppInterface;

declare module 'actioncable' {
  export = ActionCable;
}
