import { TestBed } from '@angular/core/testing';

import { PositionServerService } from './position-server.service';

describe('PositionServerService', () => {
  let service: PositionServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
