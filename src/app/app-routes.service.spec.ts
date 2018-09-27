import { TestBed } from '@angular/core/testing';

import { AppRoutesService } from './app-routes.service';

describe('AppRoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppRoutesService = TestBed.get(AppRoutesService);
    expect(service).toBeTruthy();
  });
});
