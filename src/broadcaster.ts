import { Subject } from 'rxjs';
import {map, filter} from 'rxjs/operators';

export interface BroadcastEvent {
  key: any;
  data?: any;
}

export class Broadcaster {
  private _eventBus: Subject<BroadcastEvent>;

  constructor() {
    this._eventBus = new Subject<BroadcastEvent>();
  }

  broadcast(key: any, data?: any) {
    this._eventBus.next({key, data});
  }

  on<T>(key: any): Observable<T> {
    return this._eventBus.asObservable()
      .pipe(
        filter(
          (event) => event.key === key
        )
      )
      .pipe(
        map(
          (event) => <T>event.data
        )
      )
  }
}
