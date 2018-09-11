import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import {  map, take, switchMap, catchError, skip } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState, getCourses, getCourseToUpdate } from '../@Ngrx';
import * as CoursesActions from './../@Ngrx/courses/courses.actions';
import * as RouterActions from './../@Ngrx/router/router.actions';

import { Course, InfoRes } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class CourseExistsGuard implements CanActivate {
  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.paramMap.get('id');

    return this.checkStore(id).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private checkStore(id: string) {
    return this.store.pipe(
      select(getCourses),
      map((courses) => {
        const courseToUpdate = courses.find((course: Course) => course._id === id);

        if (Boolean(courseToUpdate)) {
          this.store.dispatch(new CoursesActions.SetCourseToUpdate(courseToUpdate));
        }

        return courseToUpdate;
      }),
      switchMap((course: Course): Observable<boolean> => {
        if (!course) {
          this.store.dispatch(new CoursesActions.GetCourse(id));
          return this.store.pipe(
            select(getCourseToUpdate),
            skip(1),
            map((res: any) => {
              if (res.status === 'error') {
                this.store.dispatch(new RouterActions.Go({ path: ['/404'] }));
                return false;
              }
              return true;
            })
          );
        }
        return of(true);
      }),
      take(1),
    );
  }
}
