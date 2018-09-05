import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, take } from 'rxjs/operators';

import * as TrainersActions from './../@Ngrx/trainers/trainers.actions';
import { AppState, getTrainersLoaded } from '../@Ngrx';

@Injectable({
  providedIn: 'root'
})
export class TrainersPreloadingGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}
  canActivate(): Observable<boolean> {
    return this.checkTrainersInStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private checkTrainersInStore(): Observable<boolean> {
    return this.store.pipe(
      select(getTrainersLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new TrainersActions.GetTrainers());
        }
      }),
      take(1)
    );
  }
}
