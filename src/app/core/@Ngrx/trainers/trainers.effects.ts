import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TrainersActions from './trainers.actions';

import { Trainer } from '../../../shared/models';
import { TrainersService } from '../../../shared/services/trainers/trainers.service';

@Injectable()
export class TrainersEffects {
  constructor(
    private actions$: Actions,
    private trainersService: TrainersService,
) {}
  @Effect()
  getTrainers$: Observable<Action> = this.actions$.pipe(
    ofType(TrainersActions.TrainersActionTypes.GET_TRAINERS),
    switchMap(() => {
      console.log('get trainers effect');
      return this.trainersService
        .fetchCourses()
        .pipe(
          map((trainers: ReadonlyArray<Trainer>) => new TrainersActions.GetTrainersSuccess(trainers)),
          catchError(err => of(new TrainersActions.GetTrainersError(err)))
        );
      }
    )
  );
}
