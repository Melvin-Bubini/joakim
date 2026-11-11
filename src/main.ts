import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Start the standalone Angular app with its shared provider configuration.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
