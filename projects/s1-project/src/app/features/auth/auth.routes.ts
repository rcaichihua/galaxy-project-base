import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./views/sign-in/sign-in.view') },
]

export default routes;
