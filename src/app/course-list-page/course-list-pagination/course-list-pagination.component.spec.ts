import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListPaginationComponent } from './course-list-pagination.component';

describe('CourseListPaginationComponent', () => {
  let component: CourseListPaginationComponent;
  let fixture: ComponentFixture<CourseListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
