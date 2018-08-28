import { Action } from '@ngrx/store';
import { Course } from '../../../shared/models';
import { CoursesRes } from '../../../shared/models/courses-res.model';

export enum CoursesActionTypes {
  GET_COURSES = '[Courses] GET_COURSES',
  GET_COURSES_SUCCESS = '[Courses] GET_COURSES_SUCCESS',

  GET_COURSE = '[Courses] GET_COURSE',
  GET_COURSE_SUCCESS = '[Courses] GET_COURSE_SUCCESS',

  CREATE_COURSE = '[Courses] CREATE_COURSE',
  CREATE_COURSE_SUCCESS = '[Courses] CREATE_COURSE_SUCCESS',

  UPDATE_COURSE = '[Courses] UPDATE_COURSE',
  UPDATE_COURSE_SUCCESS = '[Courses] UPDATE_COURSE_SUCCESS',

  DELETE_COURSE = '[Courses] DELETE_COURSE',
  DELETE_COURSE_SUCCESS = '[Courses] DELETE_COURSE_SUCCESS',

  ASYNC_COURSES_ACTION_ERROR = '[Courses] ASYNC_COURSES_ACTION_ERROR',
  SET_COURSE_TO_DELETE = '[Courses] SET_COURSE_TO_DELETE',
}

export class GetCourses implements Action {
  readonly type = CoursesActionTypes.GET_COURSES;
}

export class GetCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.GET_COURSES_SUCCESS;
  constructor(public payload: CoursesRes) {}
}

export class GetCourse implements Action {
  readonly type = CoursesActionTypes.GET_COURSE;
  constructor(public payload: number) {}
}

export class GetCourseSuccess implements Action {
  readonly type = CoursesActionTypes.GET_COURSE_SUCCESS;
  constructor(public payload: Course) {}
}


export class CreateCourse implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE;
  constructor(public payload: Course) {}
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_SUCCESS;
}


export class UpdateCourse implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE;
  constructor(public payload: Course) {}
}

export class UpdateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_SUCCESS;
  constructor(public payload: Course) {}
}


export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE;
  constructor(public payload: string) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_SUCCESS;
  constructor(public payload: string) {}
}

export class AsyncCoursesActionError implements Action {
  readonly type = CoursesActionTypes.ASYNC_COURSES_ACTION_ERROR;
  constructor(public payload: Error | string) {}
}

export class SetCourseToDelete implements Action {
  readonly type = CoursesActionTypes.SET_COURSE_TO_DELETE;
  constructor(public payload: Course) {}
}



export type CoursesActions =
  | GetCourses
  | GetCoursesSuccess
  | GetCourse
  | GetCourseSuccess
  | CreateCourse
  | CreateCourseSuccess
  | UpdateCourse
  | UpdateCourseSuccess
  | DeleteCourse
  | DeleteCourseSuccess
  | AsyncCoursesActionError
  | SetCourseToDelete;
