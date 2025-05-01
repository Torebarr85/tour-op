import { Routes } from '@angular/router';

//lazyloading con loadComponent instead of simply component: myComponent
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
