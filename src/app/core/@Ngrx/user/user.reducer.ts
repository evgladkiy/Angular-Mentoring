import {  } from '@ngrx/store';
import { initialUserState, UserState } from './user.state';
import { UserActions, UserActionTypes } from './user.actions';

export function userReducer(state = initialUserState, action: UserActions): UserState {
  console.log('user reducer');

  switch (action.type) {

    case UserActionTypes.GET_USER_INFO: {
      console.log('get User Info in reducer');
      return { ...state };

    }

    case UserActionTypes.GET_USER_INFO_SUCCESS: {
      console.log('GET_USER_INFO_SUCCESS in reducer');
      return { ...state  };
    }

    case UserActionTypes.GET_USER_INFO_ERORR: {
      console.log('GET_USER_INFO_SUCCESS in reducer');
      return { ...state  };
    }

    default:
      return state;
  }
}
