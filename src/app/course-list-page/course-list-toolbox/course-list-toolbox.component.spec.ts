import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListToolboxComponent } from './course-list-toolbox.component';

describe('CourseListToolboxComponent', () => {
  let component: CourseListToolboxComponent;
  let fixture: ComponentFixture<CourseListToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
