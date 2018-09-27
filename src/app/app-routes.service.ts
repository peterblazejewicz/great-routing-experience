import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppRoutesService {
  constructor(private injector: Injector, private httpClient: HttpClient) {}

  getRoutes(): Observable<Routes> {
    return this.httpClient.get<Routes>('api/v1/config/routes');
  }

  resetRoutes(routes: Routes) {
    this.injector.get(Router).resetConfig(routes);
  }
}
