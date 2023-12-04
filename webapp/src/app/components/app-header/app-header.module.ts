import {NgModule} from '@angular/core';
import {AppHeaderComponent} from './app-header.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppHeaderComponent
  ],
    imports: [
        NgIf,
        AsyncPipe,
        RouterLink,
        AngularFireAuthModule
    ],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule {}
