import { Routes } from '@angular/router';

export const routes: Routes = [
  // Keep page bundles separate so each route loads only when visited.
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page').then((page) => page.HomePage),
    title: 'TSC — bilservice med omtanke',
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/contact/contact-page').then((page) => page.ContactPage),
    title: 'Kontakta TSC — personlig bilservice',
  },
  { path: '**', redirectTo: '' },
];
