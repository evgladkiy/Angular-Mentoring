import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, concatMap, pluck, catchError, map } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoursesService, ReqParamsService } from '../../../shared/services';
import * as CoursesActions from './courses.actions';
import * as RouterActions from './../router/router.actions';

import { Course, InfoRes, ReqParams } from '../../../shared/models';
import { DeleteCoursePayload } from '../../../shared/models/delete-course.payload';

@Injectable()
export class CoursesEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private coursesService: CoursesService,
    private reqParamsService: ReqParamsService,
) {}

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.GET_COURSES),
    pluck('payload'),
    switchMap((payload: ReqParams) => {
      const params = payload ? payload : this.reqParamsService.getParams();

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
          switchMap((res: InfoRes) => {
            const result = [];

            if (this.router.url !== '/courses') {
              result.push(new RouterActions.Go({ path: ['/courses'] }));
            }

            result.push(new CoursesActions.UpdateCourseSuccess(payload));

            return result;
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
          switchMap((res: InfoRes) => [
            new CoursesActions.CreateCourseSuccess(),
            new CoursesActions.GetCourses(null)
          ]
        ),
        catchError(err => of(new CoursesActions.AsyncCoursesActionError(err)))
      )
    )
  );

  @Effect()
  deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.DELETE_COURSE),
    pluck('payload'),
    concatMap((payload: DeleteCoursePayload) =>
      this.coursesService
        .deleteCourse(payload.id)
        .pipe(
          switchMap((res: InfoRes) => {
            const result = [];

            if (payload.isLast) {
              const { page, count, q } = this.reqParamsService.getParams();

              result.push(new RouterActions.Go({ path: ['/courses'], queryParams: { page: page - 1, count, q }  }));
            }

            result.push(new CoursesActions.DeleteCourseSuccess(payload));

            return result;
          }),
          catchError(err => of(new CoursesActions.AsyncCoursesActionError(err)))
      )
    )
  );

  @Effect()
  getCoursesAndNagigate$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.GET_COURSES_AND_NAVIGATE_BY_QUERY),
    pluck('payload'),
    switchMap((query: string) => {
      const params: ReqParams = this.reqParamsService.getDefaultParams();

      if (query) {
        params.q = query;
      }

      return [
        new RouterActions.Go({ path: ['/courses'], queryParams: params }),
        new CoursesActions.GetCourses(params)
      ];
    })
  );

  @Effect()
  createCourseSuccess$ = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.CREATE_COURSE_SUCCESS),
    map(() => new RouterActions.Go({ path: ['/courses'] }))
  );

  @Effect()
  deleteCourseSuccess = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.DELETE_COURSE_SUCCESS),
    pluck('payload'),
    map((payload: DeleteCoursePayload) => {
      const params = this.reqParamsService.getDefaultParams();
      const { page } = params;

      if (payload.isLast && page > 1) {
        params.page = page - 1;
      }

      return new CoursesActions.GetCourses(params);
    })
  );
}
