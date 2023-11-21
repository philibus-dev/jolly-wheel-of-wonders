import { NgModule } from '@angular/core';
import { SpinWheelComponent } from './spin-wheel.component';
import {SpinWheelRoutes} from "./spin-wheel.routes";


@NgModule({
  declarations: [
    SpinWheelComponent
  ],
  imports: [],
  providers: [],
  exports: [
    SpinWheelComponent,
    SpinWheelRoutes
  ],
  bootstrap: [SpinWheelComponent]
})
export class SpinWheelModule { }
