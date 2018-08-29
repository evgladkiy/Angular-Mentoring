import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, take, switchMap, catchError } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState, getCourses } from '../@Ngrx';
import * as CoursesActions from './../@Ngrx/courses/courses.actions';

import { Course } from '../../shared/models';

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

  private checkStore(id: string): Observable<boolean> {
    return this.store.pipe(
      select(getCourses),
      map((courses) => {
        const courseToUpdate = courses.find((course: Course) => course._id === id);

        if (Boolean(courseToUpdate)) {
          this.store.dispatch(new CoursesActions.SetCourseToUpdate(courseToUpdate));
        }

        return Boolean(courseToUpdate);
      }),
      tap((isCourseInStore: boolean) => {
        if (!isCourseInStore) {
          this.store.dispatch(new CoursesActions.GetCourse(id));
        }
      }),
      take(1)
    );
  }
}
