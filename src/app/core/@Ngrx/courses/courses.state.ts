import { Course } from '../../../shared/models';

export interface CoursesState {
  courses: ReadonlyArray<Course>;
  courseToDelete: Readonly<Course>;
  courseToUpdate: Readonly<Course>;
  readonly coursesCount: number;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialState: CoursesState = {
  courses: [],
  coursesCount: 0,
  courseToDelete: null,
  courseToUpdate: null,
  loading: false,
  loaded: false,
  error: null,
};
