import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CoursesState } from './courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>('courses');

export const getCourses = createSelector(
  getCoursesState,
  (state: CoursesState) => state.courses
);

export const getCoursesCount = createSelector(
  getCoursesState,
  (state: CoursesState) => state.coursesCount
);

export const getCourseToDelete = createSelector(
  getCoursesState,
  (state: CoursesState) => state.courseToDelete
);

export const getCoursesError = createSelector(
  getCoursesState,
  (state: CoursesState) => state.error
);

export const getCoursesLoaded = createSelector(
  getCoursesState,
  (state: CoursesState) => state.loaded
);


