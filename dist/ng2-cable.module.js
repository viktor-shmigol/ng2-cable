import { NgModule } from '@angular/core';
import { Ng2Cable } from './ng2-cable';
import { Broadcaster } from './broadcaster';
export var Ng2CableModule = (function () {
    function Ng2CableModule() {
    }
    Ng2CableModule.decorators = [
        { type: NgModule, args: [{
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
//# sourceMappingURL=ng2-cable.module.js.map