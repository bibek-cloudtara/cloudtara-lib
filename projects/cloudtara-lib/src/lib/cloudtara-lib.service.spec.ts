import { TestBed } from '@angular/core/testing';

import { CloudtaraLibService } from './cloudtara-lib.service';

describe('CloudtaraLibService', () => {
  let service: CloudtaraLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudtaraLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
