import { TestBed } from '@angular/core/testing';

import { CommercialeService } from './commerciale.service';

describe('CommercialeService', () => {
  let service: CommercialeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
