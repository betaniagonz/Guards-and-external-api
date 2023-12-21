import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/login/login.component').then(mod => mod.LoginComponent)
  },
  {
    path:'login',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canMatch: [AuthGuard],
    loadComponent: () => import('./admin/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
