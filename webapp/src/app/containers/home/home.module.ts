import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {HomeRoutes} from "./home.routes";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [],
  providers: [],
  exports: [
    HomeComponent,
    HomeRoutes
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
