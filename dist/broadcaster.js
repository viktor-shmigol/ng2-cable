import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export var Broadcaster = (function () {
    function Broadcaster() {
        this._eventBus = new Subject();
    }
    Broadcaster.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    Broadcaster.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === key; })
            .map(function (event) { return event.data; });
    };
    return Broadcaster;
}());
//# sourceMappingURL=broadcaster.js.map