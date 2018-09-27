import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutesService } from './app-routes.service';
import { AppRoutingModule, defaultRoutes, redirects } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FakeAppRoutesService } from './services/fake-app-routes.service';

const initApp = (appRoutes: AppRoutesService, injector: Injector) => {
  return () => {
    appRoutes.getRoutes().subscribe(routes => {
      appRoutes.resetRoutes([...defaultRoutes, ...routes, ...redirects]);
    });
  };
};

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClarityModule,
    ClrFormsNextModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeAppRoutesService, {
      delay: 250,
      apiBase: 'api/v1/config/',
    }),
    LoginModule,
  ],
  providers: [
    AppRoutesService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AppRoutesService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
