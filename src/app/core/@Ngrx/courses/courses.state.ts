import { Course } from '../../../shared/models';
import { CoursesRes } from '../../../shared/models/courses-res.model';

export interface CoursesState {
  courses: ReadonlyArray<Course>;
  coursesCount: number;
  courseToDelete: Course;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialState: CoursesState = {
  courses: [],
  coursesCount: 0,
  courseToDelete: null,
  loading: false,
  loaded: false,
  error: null,
};
