import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemFooterComponent } from './course-list-item-footer.component';
import { DurationPipe } from '../../shared/pipes';

describe('CourseListItemFooterComponent', () => {
  let component: CourseListItemFooterComponent;
  let fixture: ComponentFixture<CourseListItemFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemFooterComponent, DurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
