import { NgModule } from '@angular/core';
import { Ng2Cable } from './ng2_cable';
import { Broadcaster } from './broadcaster';

@NgModule({
  providers: [
    Ng2Cable,
    Broadcaster
  ]
})
export class Ng2CableModule {}
