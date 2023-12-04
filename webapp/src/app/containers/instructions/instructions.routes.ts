import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {InstructionsComponent} from './instructions.component';

const routes: Routes = [
  {
    path: '',
    component: InstructionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructionsRoutes {}
