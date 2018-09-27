import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutesService } from './app-routes.service';
import { Routes } from '@angular/router';

const initApp = (appRoutes: AppRoutesService) => {
  return async () => {
    const routes: Routes = await appRoutes.load();
    console.log(routes);
    appRoutes.load();
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
