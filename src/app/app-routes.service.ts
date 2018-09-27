import { Injectable, Injector } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppRoutesService {

  static defaultRoutes: Routes = [

  ]
  constructor(private injector: Injector) {}

  async load(): Promise<Routes> {
    return new Promise<Routes>((resolve, reject) => {
      resolve([]);
    });
  }
}
