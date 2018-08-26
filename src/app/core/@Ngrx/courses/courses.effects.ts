import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '../../../shared/services';
import { Observable } from 'rxjs';
import { switchMap, concatMap, pluck } from 'rxjs/operators';
import { Course } from '../../../shared/models';

@Injectable()
export class CoursesEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private coursesService: CoursesService) {}

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.GET_COURSES),
    switchMap((action: CoursesActions.GetCourses) =>
      this.coursesService.fetchCourses()
      .toPromise()
      .then(res => new CoursesActions.GetCoursesSuccess(res))
      .catch(err => new CoursesActions.GetCoursesError(err))
    )
  );

  @Effect()
  updateCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.UPDATE_COURSE),
    pluck('payload'),
    concatMap((payload: Course) =>
      this.coursesService
        .updateCourse(payload)
        .toPromise()
        .then((res) => {
          if (this.router.url !== '/courses') {
            this.router.navigate(['/courses']);
          }
          return new CoursesActions.UpdateCourseSuccess(payload);
        })
        .catch(err => new CoursesActions.UpdateCourseError(err))
    )
  );

  @Effect()
  createCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.CREATE_COURSE),
    pluck('payload'),
    concatMap((payload: Course) =>
      this.coursesService
        .addCourse(payload)
        .toPromise()
        .then(res => {
          this.router.navigate(['/courses']);
          return new CoursesActions.CreateCourseSuccess();
        })
        .catch(err => new CoursesActions.CreateCourseError(err))
    )
  );

  @Effect()
  deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.DELETE_COURSE),
    pluck('payload'),
    concatMap((payload: Course) => {
      return this.coursesService
        .deleteCourse(payload._id)
        .toPromise()
        .then(() => new CoursesActions.DeleteCourseSuccess(payload._id))
        .catch(err => new CoursesActions.DeleteCourseError(err));
    })
  );
}
