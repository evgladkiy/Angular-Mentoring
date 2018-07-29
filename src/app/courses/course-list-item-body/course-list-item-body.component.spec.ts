import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemBodyComponent } from './course-list-item-body.component';

describe('CourseListItemBodyComponent', () => {
  let component: CourseListItemBodyComponent;
  let fixture: ComponentFixture<CourseListItemBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
