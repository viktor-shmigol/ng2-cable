/// <reference types="actioncable" />
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';
export declare class Ng2Cable {
    private broadcaster;
    cable: any;
    subscription: any;
    actionCable: typeof ActionCable;
    constructor(broadcaster: Broadcaster);
    subscribe(url: string, channel: string, params?: {}): void;
    setCable(url: string): void;
    unsubscribe(): void;
}
