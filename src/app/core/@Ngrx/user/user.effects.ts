import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, pluck, catchError, map, concatMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';
import * as RouterActions from './../router/router.actions';

import { AuthService } from '../../../shared/services';
import { User, TokenRes } from '../../../shared/models';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LOGOUT),
    map(() => {
      this.router.navigate(['/login']);
      this.authService.deleteTokenFromStore();
    })
  );

  // @Effect({ dispatch: false })
  // logout2$ = this.actions$.pipe(
  //   ofType(UserActions.UserActionTypes.LOGOUT),
  //   map(() => (new RouterActions.Go({ path: ['/login'] })))
  // );

  @Effect()
  initialize$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.INITIALIZE),
    switchMap(() => {
      const token = this.authService.getTokenFromStore();

      if (token) {
        return [
          new UserActions.InitializeSuccess(token),
          new UserActions.GetUserInfo(token)
        ];
      }
      return [new UserActions.InitializeSuccess(null)];
    })
  );

  @Effect()
  authenticate$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.AUTHENTICATE),
    pluck('payload'),
    concatMap((payload: Partial<User>) =>
      this.authService
        .authenticate(payload.login, payload.password)
        .pipe(
          map((res: TokenRes) => {
            const { token } = res;

            this.authService.setTokenToStore(token);
            this.router.navigate(['/courses']);

            return token;
          }),
          switchMap((token: string) => [
            new UserActions.AuthenticateSuccess(token),
            new UserActions.GetUserInfo(token)
          ]),
          catchError(err => of(new UserActions.AuthenticateERROR(err.error))
        )
      )
    )
  );

  @Effect()
  getUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GET_USER_INFO),
    pluck('payload'),
    switchMap((payload: string) =>
      this.authService
        .fetchUserInfo(payload)
        .pipe(
          map((userInfo: User) => new UserActions.GetUserInfoSuccess(userInfo)),
          catchError(err => of(new UserActions.GetUserInfoError(err))
        )
      )
    )
  );
}
