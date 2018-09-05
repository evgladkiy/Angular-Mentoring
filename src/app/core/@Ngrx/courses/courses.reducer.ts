import { initialCoursesState, CoursesState } from './courses.state';
import { CoursesActions, CoursesActionTypes } from './courses.actions';

export function coursesReducer(state = initialCoursesState, action: CoursesActions): CoursesState {
  switch (action.type) {

    case CoursesActionTypes.GET_COURSE:
    case CoursesActionTypes.GET_COURSES:
    case CoursesActionTypes.CREATE_COURSE:
    case CoursesActionTypes.UPDATE_COURSE:
    case CoursesActionTypes.DELETE_COURSE: {
      return { ...state, loading: true };
    }

    case CoursesActionTypes.GET_COURSES_AND_NAVIGATE_BY_QUERY: {
      return state;
    }

    case CoursesActionTypes.GET_COURSES_SUCCESS: {
      const { courses, coursesCount } = action.payload;
      const { pagination } = state;
      const numberOfPages = Math.ceil(coursesCount / pagination.coursesPerPage);

      return {
        ...state,
        courses,
        loading: false,
        loaded: true,
        courseToUpdate: null,
        courseToDelete: null,
        error: null,
        pagination: { ...pagination, numberOfPages, coursesCount }
      };
    }

    case CoursesActionTypes.SET_COURSE_TO_UPDATE: {
      return {
        ...state,
        loading: false,
        courseToUpdate: action.payload,
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

    case CoursesActionTypes.PAGINATION_BUTTON_CLICK: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          activePage: action.payload,
        }
      };
    }

    case CoursesActionTypes.UPDATE_PAGINATION_BUTTONS: {
      const { pagination, courseToDelete } = state;
      const { maxButtonsAmoutn } = pagination;
      const { payload: activePage }  = action;
      const numberOfPages = courseToDelete
        ? activePage
        : pagination.numberOfPages;
      const numberOfButtons = numberOfPages <= maxButtonsAmoutn
        ? numberOfPages
        : maxButtonsAmoutn;
      const middleBtnNumber: number = Math.ceil(numberOfButtons / 2);

      const buttons = Array(numberOfButtons)
        .fill(null)
        .map((item, index) => {
          const buttonNumber = index + 1;

          if (activePage <= 3 || (numberOfPages <= maxButtonsAmoutn))  {
            return buttonNumber;
          } else if (numberOfPages - middleBtnNumber < activePage) {
            return numberOfPages + buttonNumber - maxButtonsAmoutn;
          } else {
            return activePage + buttonNumber - middleBtnNumber;
          }
        });

      return {
        ...state,
        pagination: {...pagination, buttons, activePage }
      };
    }

    default: {
      return state;
    }
  }
}
