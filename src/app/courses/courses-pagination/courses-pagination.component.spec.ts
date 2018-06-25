import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPaginationComponent } from './courses-pagination.component';

describe('CoursesPaginationComponent', () => {
  let component: CoursesPaginationComponent;
  let fixture: ComponentFixture<CoursesPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
