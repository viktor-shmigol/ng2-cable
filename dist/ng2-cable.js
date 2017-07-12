import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';
export var Ng2Cable = (function () {
    function Ng2Cable(broadcaster) {
        this.broadcaster = broadcaster;
        this.actionCable = ActionCable;
    }
    Ng2Cable.prototype.subscribe = function (url, channel) {
        var _this = this;
        this.setCable(url);
        this.subscription = this.cable.subscriptions.create(channel, {
            received: function (data) {
                _this.broadcaster.broadcast((data.action || channel), data);
            }
        });
    };
    Ng2Cable.prototype.setCable = function (url) {
        this.cable = ActionCable.createConsumer(url);
    };
    Ng2Cable.prototype.unsubscribe = function () {
        this.cable.subscriptions.remove(this.subscription);
    };
    Ng2Cable.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Ng2Cable.ctorParameters = function () { return [
        { type: Broadcaster, },
    ]; };
    return Ng2Cable;
}());
//# sourceMappingURL=ng2-cable.js.map