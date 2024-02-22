import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "jobportal-da4c3", "appId": "1:538855947669:web:629da2e565504264ed0a9c", "storageBucket": "jobportal-da4c3.appspot.com", "apiKey": "AIzaSyABcPs_VE8szlkLx7TqmDyuVns8vc30sAg", "authDomain": "jobportal-da4c3.firebaseapp.com", "messagingSenderId": "538855947669" }))), importProvidersFrom(provideAuth(() => getAuth()))]
};
