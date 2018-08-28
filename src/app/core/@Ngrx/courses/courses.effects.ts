import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CoursesActions from './courses.actions';
import { CoursesService, ReqParamsService } from '../../../shared/services';
import { Observable, of } from 'rxjs';
import { switchMap, concatMap, pluck, catchError, map } from 'rxjs/operators';
import { Course, InfoRes } from '../../../shared/models';

@Injectable()
export class CoursesEffects {
  constructor(
    private router: Router,
    private reqParamsService: ReqParamsService,
    private actions$: Actions,
    private coursesService: CoursesService) {}

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.GET_COURSES),
    switchMap(() => {
      const params = this.reqParamsService.getParams();
      console.log(params);
      return this.coursesService
        .fetchCourses(params.page, params.count, params.q)
        .pipe(
          map(res => new CoursesActions.GetCoursesSuccess(res)),
          catchError(err => of(new CoursesActions.AsyncCoursesActionError(err)))
        );
      }

    )
  );

  @Effect()
  updateCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.UPDATE_COURSE),
    pluck('payload'),
    concatMap((payload: Course) =>
      this.coursesService
        .updateCourse(payload)
          .pipe(
            map((res: InfoRes) => {
              if (this.router.url !== '/courses') {
                this.router.navigate(['/courses']);
              }
              return new CoursesActions.UpdateCourseSuccess(payload);
            }),
            catchError(err => of(new CoursesActions.AsyncCoursesActionError(err)))
          )
    )
  );

  @Effect()
  createCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.CREATE_COURSE),
    pluck('payload'),
    concatMap((payload: Course) =>
      this.coursesService
        .addCourse(payload)
        .pipe(
          map((res: InfoRes) => {
            this.router.navigate(['/courses']);

            return new CoursesActions.CreateCourseSuccess();
        }),
        catchError(err => of(new CoursesActions.AsyncCoursesActionError(err)))
      )
    )
  );

  @Effect()
  deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.DELETE_COURSE),
    pluck('payload'),
    concatMap((payload: string) =>
      this.coursesService
        .deleteCourse(payload)
        .pipe(
          switchMap((res: InfoRes) => {
            return [
              new CoursesActions.DeleteCourseSuccess(payload),
              new CoursesActions.GetCourses()
            ];
          }),
          catchError(err => of(new CoursesActions.AsyncCoursesActionError(err)))
      )
    )
  );
}
