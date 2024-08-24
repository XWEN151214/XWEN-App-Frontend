import { TestBed } from '@angular/core/testing';

import { GencontentService } from './gencontent.service';

describe('GencontentService', () => {
  let service: GencontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GencontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
