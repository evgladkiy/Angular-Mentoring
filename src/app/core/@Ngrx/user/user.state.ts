import { User } from '../../../shared/models';

export interface UserState {
  user: Readonly<User>;
  isAuthenticated: boolean;
  loading: boolean;
  isAuthorized: boolean;
  isInitialized: boolean;
  token: string;
  error: Error | string;
}

export const initialUserState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  isAuthorized: false,
  isInitialized: false,
  token: null,
  error: null,
};
