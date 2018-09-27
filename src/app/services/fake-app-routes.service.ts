import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FakeAppRoutesService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const routes: Routes = [
      {
        path: 'tasks',
        loadChildren: './tasks/tasks.module#TasksModule',
      },
      {
        path: 'administration',
        loadChildren:
          './administration/administration.module#AdministrationModule',
      },
    ];

    return {
      routes: routes,
    };
  }

  constructor() {}
}
