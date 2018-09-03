import { Course } from '../../../shared/models';

export interface CoursesState {
  courses: ReadonlyArray<Course>;
  courseToDelete: Readonly<Course>;
  courseToUpdate: Readonly<Course>;
  loading: boolean;
  loaded: boolean;
  error: Error | string;
  pagination: {
    activePage: number;
    maxButtonsAmoutn: number;
    coursesPerPage: number;
    numberOfPages: number;
    coursesCount: number;
    buttons: ReadonlyArray<number>;
  };
}

export const initialState: CoursesState = {
  courses: [],
  courseToDelete: null,
  courseToUpdate: null,
  loading: false,
  loaded: false,
  error: null,
  pagination: {
    activePage: 1,
    coursesCount: 0,
    numberOfPages: 0,
    maxButtonsAmoutn: 5,
    coursesPerPage: 5,
    buttons: [1, 2, 3, 4, 5],
  },
};
