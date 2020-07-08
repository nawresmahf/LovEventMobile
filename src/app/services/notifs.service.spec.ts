import { TestBed } from '@angular/core/testing';

import { NotifsService } from './notifs.service';

describe('NotifsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifsService = TestBed.get(NotifsService);
    expect(service).toBeTruthy();
  });
});
