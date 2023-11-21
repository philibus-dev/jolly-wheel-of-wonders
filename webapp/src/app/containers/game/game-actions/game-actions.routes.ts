import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GameActionsComponent} from './game-actions.component';

const routes: Routes = [
  {
    path: '',
    component: GameActionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameActionsRoutes {}
