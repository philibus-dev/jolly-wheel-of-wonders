import { NgModule } from '@angular/core';
import { InstructionsComponent } from './instructions.component';
import {InstructionsRoutes} from "./instructions.routes";


@NgModule({
  declarations: [
    InstructionsComponent
  ],
  imports: [],
  providers: [],
  exports: [
    InstructionsComponent,
    InstructionsRoutes
  ],
  bootstrap: [InstructionsComponent]
})
export class InstructionsModule { }
