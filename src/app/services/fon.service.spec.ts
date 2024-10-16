import { TestBed } from '@angular/core/testing';

import { FonService } from './fon.service';

describe('FonService', () => {
  let service: FonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
