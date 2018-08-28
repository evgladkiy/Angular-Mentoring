import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

export const getUserState = createFeatureSelector<UserState>('user');

export const getUser = createSelector(
  getUserState,
  (state: UserState) => state.user
);

export const getIsUserAuthenticated = createSelector(
  getUserState,
  (state: UserState) => state.isAuthenticated
);

export const getIsUserInitialized = createSelector(
  getUserState,
  (state: UserState) => state.isInitialized
);

export const getUserError = createSelector(
  getUserState,
  (state: UserState) => state.error
);

export const getIsUserLoading = createSelector(
  getUserState,
  (state: UserState) => state.loading
);

export const getIsUserAuthorized = createSelector(
  getUserState,
  (state: UserState) => state.isAuthorized
);

export const getAuthToken = createSelector(
  getUserState,
  (state: UserState) => state.token
);
