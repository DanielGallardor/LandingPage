import { TestBed } from '@angular/core/testing';

import { FakepasswordService } from './fakepassword.service';

describe('FakepasswordService', () => {
  let service: FakepasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakepasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
