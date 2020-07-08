import { TestBed } from '@angular/core/testing';

import { EvtImageService } from './evt-image.service';

describe('EvtImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvtImageService = TestBed.get(EvtImageService);
    expect(service).toBeTruthy();
  });
});
