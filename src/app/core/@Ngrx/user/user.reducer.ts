import { initialUserState, UserState } from './user.state';
import { UserActions, UserActionTypes } from './user.actions';

export function userReducer(state = initialUserState, action: UserActions): UserState {

  switch (action.type) {
    case UserActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.INITIALIZE: {
      return state;
    }

    case UserActionTypes.INITIALIZE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: Boolean(action.payload),
        token: action.payload,
      };
    }

    case UserActionTypes.AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload,
        isInitialized: true,
      };
    }

    case UserActionTypes.LOGOUT: {
      return {
        ...state,
        user: null,
        token: null,
        error: null,
        loading: false,
        isAuthenticated: false,
        isAuthorized: false,
      };
    }

    case UserActionTypes.AUTHENTICATE:
    case UserActionTypes.GET_USER_INFO: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case UserActionTypes.GET_USER_INFO_ERORR:
    case UserActionTypes.AUTHENTICATE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case UserActionTypes.AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload,
      };
    }

    case UserActionTypes.GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthorized: true,
      };
    }

    default:
      return state;
  }
}
