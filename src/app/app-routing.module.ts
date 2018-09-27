import { NgModule, Injector, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const defaultRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];
const redirects: Routes = [
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
const config: Routes = [
  {
    path: 'tasks',
    loadChildren: './tasks/tasks.module#TasksModule',
  },
  {
    path: 'administration',
    loadChildren: './administration/administration.module#AdministrationModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot([...defaultRoutes, ...redirects])],
  exports: [RouterModule],
})
export class AppRoutingModule implements OnInit {
  ngOnInit(): void {
    console.log(this.injector);
  }
  constructor(private injector: Injector) {
    const router = this.injector.get(Router);
    const routes: Routes = [...defaultRoutes, ...config, ...redirects];
    console.log(routes);
    router.resetConfig(routes);
  }
}
