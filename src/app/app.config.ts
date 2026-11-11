import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Route fragments such as #form should scroll into view after navigation.
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled' })),
  ],
};
