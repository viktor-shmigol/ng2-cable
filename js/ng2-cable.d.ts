import { Broadcaster } from './broadcaster';
export declare class Ng2Cable {
    private broadcaster;
    cable: any;
    subscription: any;
    constructor(broadcaster: Broadcaster);
    subscribe(url: any, channel: any): void;
    setCable(url: any): void;
    unsubscribe(): void;
}
