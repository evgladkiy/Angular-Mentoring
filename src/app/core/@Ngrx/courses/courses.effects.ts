import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, concatMap, pluck, catchError, map } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoursesService, ReqParamsService } from '../../../shared/services';
import * as CoursesActions from './courses.actions';

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
  getCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.GET_COURSE),
    pluck('payload'),
    concatMap((payload: string) =>
      this.coursesService
        .getCoursebyId(payload)
        .pipe(
          map((course: Course) => new CoursesActions.SetCourseToUpdate(course)),
          catchError(err => of(new CoursesActions.AsyncCoursesActionError(err))
        )
      )
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
    concatMap((payload: {id: string, isLast: boolean}) =>
      this.coursesService
        .deleteCourse(payload.id)
        .pipe(
          map(async (res: InfoRes) => {
            if (payload.isLast) {
              const { page, count, q } = this.reqParamsService.getParams();

              return this.router
                .navigate(['/courses'], { queryParams: { page: page - 1, count, q } });
            }
            return payload.id;
          }),
          switchMap((id: string) => [
              new CoursesActions.DeleteCourseSuccess(payload.id),
              new CoursesActions.GetCourses()
            ]
          ),
          catchError(err => of(new CoursesActions.AsyncCoursesActionError(err)))
      )
    )
  );
}
