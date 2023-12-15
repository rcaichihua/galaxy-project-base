import { Routes } from '@angular/router';
import { NotFoundView } from './core/views/not-found/not-found.view';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.routes') },
  { path: '**', component: NotFoundView },
];
