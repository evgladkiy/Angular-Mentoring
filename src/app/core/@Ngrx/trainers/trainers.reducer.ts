import { initialTrainersState, TrainersState } from './trainers.state';
import { TrainersActions, TrainersActionTypes } from './trainers.actions';

export function trainersReducer(state = initialTrainersState, action: TrainersActions): TrainersState {

  switch (action.type) {
    case TrainersActionTypes.GET_TRAINERS: {
      return {
        ...state,
        error: null,
        loading: true
      };
    }

    case TrainersActionTypes.GET_TRAINERS_SUCCESS: {
      return {
        ...state,
        trainers: action.payload,
        loading: false,
        loaded: true,
      };
    }

    case TrainersActionTypes.GET_TRAINERS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loaded: false,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
