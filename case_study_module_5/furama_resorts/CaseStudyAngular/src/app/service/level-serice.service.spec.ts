import { TestBed } from '@angular/core/testing';

import { LevelSericeService } from './level-serice.service';

describe('LevelSericeService', () => {
  let service: LevelSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
