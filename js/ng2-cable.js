"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ActionCable = require('actioncable');
var broadcaster_1 = require('./broadcaster');
var Ng2Cable = (function () {
    function Ng2Cable(broadcaster) {
        this.broadcaster = broadcaster;
    }
    Ng2Cable.prototype.subscribe = function (url, channel) {
        var _this = this;
        this.cable = ActionCable.createConsumer(url);
        this.subscription = this.cable.subscriptions.create(channel, {
            received: function (data) {
                _this.broadcaster.broadcast((data.action || channel), data);
            }
        });
    };
    Ng2Cable.prototype.unsubscribe = function () {
        this.cable.subscriptions.remove(this.subscription);
    };
    Ng2Cable = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [broadcaster_1.Broadcaster])
    ], Ng2Cable);
    return Ng2Cable;
}());
exports.Ng2Cable = Ng2Cable;
//# sourceMappingURL=ng2-cable.js.map