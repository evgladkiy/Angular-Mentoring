import { TestBed, inject } from '@angular/core/testing';

import { ReqParamsService } from './req-params.service';

describe('ReqParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqParamsService]
    });
  });

  it('should be created', inject([ReqParamsService], (service: ReqParamsService) => {
    expect(service).toBeTruthy();
  }));
});
