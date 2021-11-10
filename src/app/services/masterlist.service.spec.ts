import { TestBed } from '@angular/core/testing';

import { MasterListService } from './masterlist.service';

describe('PhotoService', () => {
  let service: MasterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
