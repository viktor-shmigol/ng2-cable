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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ActionCable = require("actioncable");
const broadcaster_1 = require("./broadcaster");
let Ng2Cable = class Ng2Cable {
    constructor(broadcaster) {
        this.broadcaster = broadcaster;
    }
    subscribe(url, channel) {
        this.setCable(url);
        this.subscription = this.cable.subscriptions.create(channel, {
            received: (data) => {
                this.broadcaster.broadcast((data.action || channel), data);
            }
        });
    }
    setCable(url) {
        this.cable = ActionCable.createConsumer(url);
    }
    unsubscribe() {
        this.cable.subscriptions.remove(this.subscription);
    }
};
Ng2Cable = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [broadcaster_1.Broadcaster])
], Ng2Cable);
exports.Ng2Cable = Ng2Cable;
//# sourceMappingURL=/home/victor/projects/ng2-cable/ts/ng2-cable.js.map