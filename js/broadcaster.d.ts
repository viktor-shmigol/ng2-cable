import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export declare class Broadcaster {
    private _eventBus;
    constructor();
    broadcast(key: any, data?: any): void;
    on<T>(key: any): Observable<T>;
}
