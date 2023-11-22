import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SpinWheelComponent} from './spin-wheel.component';

const routes: Routes = [
  {
    path: '',
    component: SpinWheelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinWheelRoutes {}
