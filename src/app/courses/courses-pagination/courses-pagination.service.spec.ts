import { TestBed, inject } from '@angular/core/testing';

import { CoursesPaginationService } from './courses-pagination.service';

describe('CoursesPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesPaginationService]
    });
  });

  it('should be created', inject([CoursesPaginationService], (service: CoursesPaginationService) => {
    expect(service).toBeTruthy();
  }));
});
