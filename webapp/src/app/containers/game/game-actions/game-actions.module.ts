import { NgModule } from '@angular/core';
import { GameActionsComponent } from './game-actions.component';
import {GameActionsRoutes} from "./game-actions.routes";


@NgModule({
  declarations: [
    GameActionsComponent
  ],
  imports: [],
  providers: [],
  exports: [
    GameActionsComponent,
    GameActionsRoutes
  ],
  bootstrap: [GameActionsComponent]
})
export class GameActionsModule { }
