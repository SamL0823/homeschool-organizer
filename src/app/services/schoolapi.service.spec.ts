import { TestBed } from '@angular/core/testing';

import { SchoolapiService } from './schoolapi.service';

describe('SchoolapiService', () => {
  let service: SchoolapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
