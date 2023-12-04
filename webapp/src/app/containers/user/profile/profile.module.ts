import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import {ProfileRoutes} from "./profile.routes";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [],
  providers: [],
  exports: [
    ProfileComponent,
    ProfileRoutes
  ],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
