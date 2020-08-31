import { TestBed } from '@angular/core/testing';

import { ReboServicesService } from './rebo-services.service';

describe('ReboServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReboServicesService = TestBed.get(ReboServicesService);
    expect(service).toBeTruthy();
  });
});
