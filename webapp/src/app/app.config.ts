import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideRouter } from "@angular/router";

import { routes } from "./app-routing.module";
import { environment } from 'src/environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(
    provideFirebaseApp(() => initializeApp(
      environment.firebase)
    ),
    provideFirestore(() => getFirestore())),
  importProvidersFrom(provideAuth(() => getAuth())),
  importProvidersFrom(provideFirestore(() => getFirestore()))]
};