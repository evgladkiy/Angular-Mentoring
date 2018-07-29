import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemHeaderComponent } from './course-list-item-header.component';

describe('CourseListItemHeaderComponent', () => {
  let component: CourseListItemHeaderComponent;
  let fixture: ComponentFixture<CourseListItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
