import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './components/app-header/app-header.module';
import { Auth } from '@angular/fire/auth';

import { appConfig } from './app.config';

@NgModule({
  ...appConfig,
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppHeaderModule
  ],
  providers: [Auth],
  bootstrap: [AppComponent],
})
export class AppModule {}
