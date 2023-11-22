import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutes } from "./home.routes";
import { WheelComponent } from 'src/app/components/wheel/wheel.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [WheelComponent],
  providers: [],
  exports: [
    HomeComponent,
    HomeRoutes
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
