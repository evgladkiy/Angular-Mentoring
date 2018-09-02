import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import * as CoursesActions from '../core/@Ngrx/courses/courses.actions';
import { Store, select } from '@ngrx/store';
import { AppState, getCourseToDelete, getCourses, getCoursesError } from '../core/@Ngrx';

import { Course } from '../shared/models';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.less'],
})
export class CourseListPageComponent implements OnInit, OnDestroy {
  private courseToDeleteSub: Subscription;
  private coursesSub: Subscription;
  public courseToDelete: Course;
  public courses: ReadonlyArray<Course>;
  public coursesLoadingError$: Observable<Error | string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.coursesSub = this.store.pipe(select(getCourses)).subscribe(
      courses => this.courses = courses
    );
    this.courseToDeleteSub = this.store.pipe(select(getCourseToDelete)).subscribe(
      course => this.courseToDelete = course
    );
    this.coursesLoadingError$ = this.store.pipe(select(getCoursesError));
    this.store.dispatch(new CoursesActions.GetCourses(null));
  }

  ngOnDestroy(): void {
    this.courseToDeleteSub.unsubscribe();
    this.coursesSub.unsubscribe();
  }

  onSubmitModal(): void {
    const { _id: id } = this.courseToDelete;
    const isLast = this.courses.length === 1 && this.courses[0]._id === id;

    this.store.dispatch(new CoursesActions.DeleteCourse({ id, isLast }));
  }

  onCloseModal(): void {
    this.store.dispatch(new CoursesActions.SetCourseToDelete(null));
  }
}
