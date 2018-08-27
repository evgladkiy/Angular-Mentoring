import { Action } from '@ngrx/store';
import { User } from '../../../shared/models';

export enum UserActionTypes {
  GET_USER_INFO = '[User] GET_USER_INFO',
  GET_USER_INFO_SUCCESS = '[User] GET_USER_INFO_SUCCESS',
  GET_USER_INFO_ERORR = '[User] GET_USER_INFO_ERORR',

  SET_TOKEN = '[User] SET_TOKEN',

  AUTHENTICATE_USER = '[User] AUTHENTICATE_USER',
  AUTHENTICATE_USER_SUCCESS = '[User] AUTHENTICATE_USER_SUCCESS',
  AUTHENTICATE_USER_ERROR = '[User] AUTHENTICATE_USER_ERROR',
}

export class GetUserInfo implements Action {
  readonly type = UserActionTypes.GET_USER_INFO;
}

export class GetUserInfoSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: User) {}
}

export class GetUserInfoError implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_ERORR;
  constructor(public payload: Error | string) {}
}

export class SetToken implements Action {
  readonly type = UserActionTypes.SET_TOKEN;
  constructor(public payload: Error | string) {}
}

export type UserActions =
    GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoError
  | SetToken;
