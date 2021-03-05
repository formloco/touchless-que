import { TestBed } from '@angular/core/testing';

import { QueService } from './que.service';

describe('QueService', () => {
  let service: QueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
