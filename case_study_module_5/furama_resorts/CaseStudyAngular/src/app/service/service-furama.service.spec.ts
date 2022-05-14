import { TestBed } from '@angular/core/testing';

import { ServiceFuramaService } from './service-furama.service';

describe('ServiceFuramaService', () => {
  let service: ServiceFuramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFuramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
