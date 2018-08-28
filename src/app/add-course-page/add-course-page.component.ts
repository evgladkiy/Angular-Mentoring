import { Component } from '@angular/core';

import * as CoursesActions from '../core/@Ngrx/courses/courses.actions';
import { Course } from '../shared/models';
import { Store } from '@ngrx/store';
import { AppState } from '../core/@Ngrx';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: [ './add-course-page.component.less' ],
})
export class AddCoursePageComponent {
  constructor (private store: Store<AppState>) { }

  onSubmit(course: Course): void {
    this.store.dispatch(new CoursesActions.CreateCourse(course));
  }
}
