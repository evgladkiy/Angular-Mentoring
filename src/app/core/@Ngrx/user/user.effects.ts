import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { AuthService } from '../../../shared/services';
import { Observable, of } from 'rxjs';
import { switchMap, pluck, catchError, map } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { console.log('[user Effects]'); }

  // @Effect()
  // getUserInfo$: Observable<Action> = this.actions$.pipe(
  //   ofType(UserActions.UserActionTypes.GET_USER_INFO),
  //   pluck('payload'),
  //   switchMap((payload: string) =>
  //     this.authService
  //       .fetchUserInfo(payload)
  //       .pipe(
  //         // map(userInfo => new UserActions.GetUserInfoSuccess(userInfo),
  //         // catchError(err => of(new UserActions.GetUserInfoError(err))
  //       )
  //   )
  // );
}
