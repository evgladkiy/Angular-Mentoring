import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

export const getUsersState = createFeatureSelector<UserState>('user');

// export const getCourses = createSelector(
//   getCoursesState,
//   (state: CoursesState) => state.courses
// );

// export const getCoursesCount = createSelector(
//   getCoursesState,
//   (state: CoursesState) => state.coursesCount
// );

// export const getCourseToDelete = createSelector(
//   getCoursesState,
//   (state: CoursesState) => state.courseToDelete
// );

// export const getCoursesError = createSelector(
//   getCoursesState,
//   (state: CoursesState) => state.error
// );

// export const getCoursesLoaded = createSelector(
//   getCoursesState,
//   (state: CoursesState) => state.loaded
// );


