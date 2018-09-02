import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RouterActions from './router.actions';

import { pluck, tap, take, map } from 'rxjs/operators';


@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) { }

  @Effect({dispatch: false })
    navigate$ = this.actions$.pipe(
      ofType(RouterActions.RouterActionTypes.GO),
      pluck('payload'),
      tap(({ path, queryParams, extras }) => (
        this.router.navigate(path, { queryParams, ...extras })
      ))
  );
}

