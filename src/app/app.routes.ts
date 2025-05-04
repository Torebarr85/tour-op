import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

//lazyloading con loadComponent instead of simply component: myComponent
export const routes: Routes = [
  {
    path: 'tour-list',
    loadComponent: () => import('./features/tour-list/tour-list.component'),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component'),
    canActivate: [authGuardFn],
  },
  {
    path: '',
    redirectTo: 'tour-list',
    pathMatch: 'full',
  },
];
