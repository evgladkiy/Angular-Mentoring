import { initialState, CoursesState } from './courses.state';
import { CoursesActions, CoursesActionTypes } from './courses.actions';

export function coursesReducer(state = initialState, action: CoursesActions): CoursesState {
  console.log(`Reducer: action come in! ${action.type}`);
  switch (action.type) {
    case CoursesActionTypes.GET_COURSES: {
      console.log('Get courses action in reducer');
      return { ...state, loading: true };
    }

    case CoursesActionTypes.GET_COURSES_SUCCESS : {
      const { courses, coursesCount } = action.payload;
      console.log('GET_COURSES_SUCCESS action in reducer');
      return {
        ...state,
        courses,
        coursesCount,
        loading: false,
        loaded: true,
        error: null
      };
    }

    case CoursesActionTypes.GET_COURSES_ERROR : {
      console.log('GET_COURSES_ERROR action in reducer');

      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case CoursesActionTypes.GET_COURSE: {
      console.log('Get course action in reducer');
      return { ...state };
    }

    case CoursesActionTypes.CREATE_COURSE: {
      return { ...state, loading: true };
    }

    case CoursesActionTypes.CREATE_COURSE_SUCCESS: {
      return {...state, loading: false };
    }

    case CoursesActionTypes.CREATE_COURSE_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case CoursesActionTypes.UPDATE_COURSE: {
      console.log('Update course action in reducer');
      return { ...state };
    }

    case CoursesActionTypes.UPDATE_COURSE_SUCCESS: {
      const updatedCourse = action.payload;
      const courses = state.courses.map(course => (
        course._id === updatedCourse._id ? updatedCourse : course
      ));

      return {
        ...state,
        courses,
        courseToDelete: null,
      };
    }

    case CoursesActionTypes.DELETE_COURSE: {
      return { ...state };
    }

    case CoursesActionTypes.DELETE_COURSE_SUCCESS : {
      const courses = state.courses
        .filter(course => course._id !== action.payload);

      return {
        ...state,
        courses,
        courseToDelete: null,
      };
    }

    case CoursesActionTypes.DELETE_COURSE_ERROR : {
      return { ...state, error: action.payload };
    }

    case CoursesActionTypes.SET_COURSE_TO_DELETE: {
      return { ...state, courseToDelete: action.payload };
    }

    default: {
      console.log('deault case action in reducer');
      return state;
    }
  }
}
