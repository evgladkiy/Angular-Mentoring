import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CoursesState } from './courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>('courses');

export const getCourses = createSelector(
  getCoursesState,
  (state: CoursesState) => state.courses
);

export const getCourseToDelete = createSelector(
  getCoursesState,
  (state: CoursesState) => state.courseToDelete
);

export const getCourseToUpdate = createSelector(
  getCoursesState,
  (state: CoursesState) => state.courseToUpdate
);

export const getCoursesError = createSelector(
  getCoursesState,
  (state: CoursesState) => state.error
);

export const getCoursesLoaded = createSelector(
  getCoursesState,
  (state: CoursesState) => state.loaded
);

export const getIsCoursesLoading = createSelector(
  getCoursesState,
  (state: CoursesState) => state.loading
);

export const getPagination = createSelector(
  getCoursesState,
  (state: CoursesState) => state.pagination
);

export const getPaginationCoursesPerPage = createSelector(
  getCoursesState,
  (state: CoursesState) => state.pagination.coursesPerPage
);

