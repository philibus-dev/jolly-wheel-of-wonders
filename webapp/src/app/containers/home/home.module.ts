import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutes } from "./home.routes";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  exports: [
    HomeComponent,
    HomeRoutes
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
