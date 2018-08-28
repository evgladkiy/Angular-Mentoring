import { Action } from '@ngrx/store';
import { User } from '../../../shared/models';

export enum UserActionTypes {
  GET_USER_INFO = '[User] GET_USER_INFO',
  GET_USER_INFO_SUCCESS = '[User] GET_USER_INFO_SUCCESS',
  GET_USER_INFO_ERORR = '[User] GET_USER_INFO_ERORR',

  AUTHENTICATE = '[User] AUTHENTICATE',
  AUTHENTICATE_SUCCESS = '[User] AUTHENTICATE_SUCCESS',
  AUTHENTICATE_ERROR = '[User] AUTHENTICATE_ERROR',

  INITIALIZE = '[User] INITIALIZE',
  INITIALIZE_SUCCESS = '[User] INITIALIZE_SUCCESS',

  LOGOUT = '[User] LOGOUT',
}

export class GetUserInfo implements Action {
  readonly type = UserActionTypes.GET_USER_INFO;
  constructor(public payload: string) {}
}

export class GetUserInfoSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: User) {}
}

export class GetUserInfoError implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_ERORR;
  constructor(public payload: Error | string) {}
}

export class Authenticate implements Action {
  readonly type = UserActionTypes.AUTHENTICATE;
  constructor(public payload: Partial<User>) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = UserActionTypes.AUTHENTICATE_SUCCESS;
  constructor(public payload: string) {}
}

export class AuthenticateERROR implements Action {
  readonly type = UserActionTypes.AUTHENTICATE_ERROR;
  constructor(public payload: Error | string) {}
}

export class Initialize {
  readonly type = UserActionTypes.INITIALIZE;
}

export class InitializeSuccess {
  readonly type = UserActionTypes.INITIALIZE_SUCCESS;
  constructor(public payload: string) {}
}

export class Logout {
  readonly type = UserActionTypes.LOGOUT;
}

export type UserActions =
  | GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoError
  | Authenticate
  | AuthenticateSuccess
  | AuthenticateERROR
  | Initialize
  | InitializeSuccess
  | Logout;
