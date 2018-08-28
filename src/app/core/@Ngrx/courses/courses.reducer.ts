import { initialState, CoursesState } from './courses.state';
import { CoursesActions, CoursesActionTypes } from './courses.actions';

export function coursesReducer(state = initialState, action: CoursesActions): CoursesState {
  switch (action.type) {

    case CoursesActionTypes.GET_COURSE:
    case CoursesActionTypes.GET_COURSES:
    case CoursesActionTypes.CREATE_COURSE:
    case CoursesActionTypes.UPDATE_COURSE:
    case CoursesActionTypes.DELETE_COURSE: {
      return { ...state, loading: true };
    }

    case CoursesActionTypes.GET_COURSES_SUCCESS: {
      const { courses, coursesCount } = action.payload;

      return {
        ...state,
        courses,
        coursesCount,
        loading: false,
        loaded: true,
        error: null
      };
    }

    case CoursesActionTypes.CREATE_COURSE_SUCCESS: {
      return {...state, loading: false };
    }

    case CoursesActionTypes.UPDATE_COURSE_SUCCESS: {
      const { payload: updatedCourse } = action;
      const courses = state.courses.map(course => (
        course._id === updatedCourse._id ? updatedCourse : course
      ));

      return {
        ...state,
        courses,
        loading: false,
      };
    }

    case CoursesActionTypes.DELETE_COURSE_SUCCESS: {
      return {
        ...state,
        loading: false,
        courseToDelete: null,
      };
    }

    case CoursesActionTypes.ASYNC_COURSES_ACTION_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case CoursesActionTypes.SET_COURSE_TO_DELETE: {
      return { ...state, courseToDelete: action.payload };
    }

    default: {
      return state;
    }
  }
}
