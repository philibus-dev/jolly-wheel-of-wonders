import { NgModule } from '@angular/core';
import { StartGameComponent } from './start-game.component';
import {StartGameRoutes} from "./start-game.routes";


@NgModule({
  declarations: [
    StartGameComponent
  ],
  imports: [],
  providers: [],
  exports: [
    StartGameComponent,
    StartGameRoutes
  ],
  bootstrap: [StartGameComponent]
})
export class StartGameModule { }
