import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

//lazyloading con loadComponent instead of simply component: myComponent
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component'),
    canActivate: [authGuardFn],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
