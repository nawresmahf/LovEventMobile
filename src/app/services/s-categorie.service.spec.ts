import { TestBed } from '@angular/core/testing';

import { SCategorieService } from './s-categorie.service';

describe('SCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SCategorieService = TestBed.get(SCategorieService);
    expect(service).toBeTruthy();
  });
});
