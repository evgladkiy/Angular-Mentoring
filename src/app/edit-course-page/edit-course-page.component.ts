import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState, getCourseToUpdate } from '../core/@Ngrx';
import * as CoursesActions from '../core/@Ngrx/courses/courses.actions';

import { Course } from '../shared/models';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: [ './edit-course-page.component.less' ],
})
export class EditCoursePageComponent implements OnInit {
  public courseToUpdate: Observable<Readonly<Course>>;

  constructor (private store: Store<AppState>) { }

  ngOnInit() {
    this.courseToUpdate = this.store.pipe(select(getCourseToUpdate));
  }

  onSubmit(course: Course): void {
    this.store.dispatch(new CoursesActions.UpdateCourse(course));
  }
}
