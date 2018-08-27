import { User } from '../../../shared/models';


export interface UserState {
  user: Readonly<User>;
  isAuthenticated: boolean;
  loaded: boolean;
  loading: boolean;
  token: string;
  authEror: Error | string;
}

export const initialUserState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  loaded: false,
  token: null,
  authEror: null,
};
