import { TestBed } from '@angular/core/testing';

import { FakeAppRoutesService } from './fake-app-routes.service';

describe('FakeAppRoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeAppRoutesService = TestBed.get(FakeAppRoutesService);
    expect(service).toBeTruthy();
  });
});
