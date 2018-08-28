import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

import { Course } from '../shared/models';
import { Store } from '@ngrx/store';
import { AppState } from '../core/@Ngrx';
import * as CoursesActions from '../core/@Ngrx/courses/courses.actions';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: [ './edit-course-page.component.less' ],
})
export class EditCoursePageComponent implements OnInit {
  public course: Course;

  constructor (
    private store: Store<AppState>,
    private activeRoute: ActivatedRoute) {
      this.course = this.activeRoute.snapshot.data.course;
    }

  ngOnInit() {
    this.course = { ...this.activeRoute.snapshot.data.course };
  }

  onSubmit(course: Course): void {
    this.store.dispatch(new CoursesActions.UpdateCourse(course));
  }
}
