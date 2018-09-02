import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, take } from 'rxjs/operators';

import * as CoursesActions from './../@Ngrx/courses/courses.actions';
import { AppState, getCoursesLoaded } from '../@Ngrx';

@Injectable({
  providedIn: 'root'
})
export class CoursesPreloadingGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(getCoursesLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new CoursesActions.GetCourses(null));
        }
      }),
      take(1)
    );
  }
}
