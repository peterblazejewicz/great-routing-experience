import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const defaultRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];
export const redirects: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot([...defaultRoutes, ...redirects])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
