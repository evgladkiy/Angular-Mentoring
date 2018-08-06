import { TestBed, inject } from '@angular/core/testing';

import { CourseListPaginationService } from './course-list-pagination.service';

describe('CourseListPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListPaginationService]
    });
  });

  it('should be created', inject([CourseListPaginationService], (service: CourseListPaginationService) => {
    expect(service).toBeTruthy();
  }));
});
