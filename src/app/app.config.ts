import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync('noop'),
    provideAuth0({
      domain: 'dev-3i4hjaehtkkyaf05.us.auth0.com',
      clientId: 'WsNWinjIbuREFaXE1lHKTW9C4L6vmPrb',
      //after login redirect to origin page
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};

 

