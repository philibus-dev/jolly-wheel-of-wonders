import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StartGameComponent} from './start-game.component';

const routes: Routes = [
  {
    path: '',
    component: StartGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartGameRoutes {}
