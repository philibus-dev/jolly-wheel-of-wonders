import { NgModule } from '@angular/core';
import { SpinWheelComponent } from './spin-wheel.component';
import {SpinWheelRoutes} from "./spin-wheel.routes";
import { WheelComponent } from "../../../components/wheel/wheel.component";


@NgModule({
    declarations: [
        SpinWheelComponent
    ],
    providers: [],
    exports: [
        SpinWheelComponent,
        SpinWheelRoutes
    ],
    bootstrap: [SpinWheelComponent],
    imports: [WheelComponent]
})
export class SpinWheelModule { }
