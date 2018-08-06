import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemFooterComponent } from './course-list-item-footer.component';

describe('CourseListItemFooterComponent', () => {
  let component: CourseListItemFooterComponent;
  let fixture: ComponentFixture<CourseListItemFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
