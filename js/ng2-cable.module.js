"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ng2_cable_1 = require("./ng2-cable");
const broadcaster_1 = require("./broadcaster");
let Ng2CableModule = class Ng2CableModule {
};
Ng2CableModule = __decorate([
    core_1.NgModule({
        providers: [
            ng2_cable_1.Ng2Cable,
            broadcaster_1.Broadcaster
        ]
    })
], Ng2CableModule);
exports.Ng2CableModule = Ng2CableModule;
//# sourceMappingURL=/home/victor/projects/ng2-cable/ng2-cable.module.js.map