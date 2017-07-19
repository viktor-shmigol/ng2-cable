(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Subject'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/map'), require('@angular/core'), require('actioncable')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Subject', 'rxjs/add/operator/filter', 'rxjs/add/operator/map', '@angular/core', 'actioncable'], factory) :
	(factory((global['ng2-cable'] = global['ng2-cable'] || {}),global.rxjs_Subject,null,global.Rx.Observable.prototype,global.ng.core,global.ActionCable));
}(this, (function (exports,rxjs_Subject,rxjs_add_operator_filter,rxjs_add_operator_map,_angular_core,ActionCable) { 'use strict';

var Broadcaster = (function () {
    function Broadcaster() {
        this._eventBus = new rxjs_Subject.Subject();
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

var Ng2Cable = (function () {
    function Ng2Cable(broadcaster) {
        this.broadcaster = broadcaster;
        this.actionCable = ActionCable;
    }
    Ng2Cable.prototype.subscribe = function (url, channel, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        this.setCable(url);
        var subscriptionParams = Object.assign({ channel: channel }, params);
        this.subscription = this.cable.subscriptions.create(subscriptionParams, {
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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    Ng2Cable.ctorParameters = function () { return [
        { type: Broadcaster, },
    ]; };
    return Ng2Cable;
}());

var Ng2CableModule = (function () {
    function Ng2CableModule() {
    }
    Ng2CableModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [
                        Ng2Cable,
                        Broadcaster
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2CableModule.ctorParameters = function () { return []; };
    return Ng2CableModule;
}());

exports.Broadcaster = Broadcaster;
exports.Ng2Cable = Ng2Cable;
exports.Ng2CableModule = Ng2CableModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
