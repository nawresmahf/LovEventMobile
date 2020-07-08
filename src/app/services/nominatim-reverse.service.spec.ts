import { TestBed } from '@angular/core/testing';

import { NominatimReverseService } from './nominatim-reverse.service';

describe('NominatimReverseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NominatimReverseService = TestBed.get(NominatimReverseService);
    expect(service).toBeTruthy();
  });
});
