"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
class Broadcaster {
    constructor() {
        this._eventBus = new Subject_1.Subject();
    }
    broadcast(key, data) {
        this._eventBus.next({ key, data });
    }
    on(key) {
        return this._eventBus.asObservable()
            .filter(event => event.key === key)
            .map(event => event.data);
    }
}
exports.Broadcaster = Broadcaster;
//# sourceMappingURL=/home/victor/projects/ng2-cable/broadcaster.js.map