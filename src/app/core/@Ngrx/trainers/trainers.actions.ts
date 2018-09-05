import { Action } from '@ngrx/store';
import { Trainer } from '../../../shared/models';

export enum TrainersActionTypes {
  GET_TRAINERS = '[Trainers] GET_TRAINERS',
  GET_TRAINERS_SUCCESS = '[Trainers] GET_TRAINERS_SUCCESS',
  GET_TRAINERS_ERROR = '[Trainers] GET_TRAINERS_ERROR',
}

export class GetTrainers implements Action {
  readonly type = TrainersActionTypes.GET_TRAINERS;
}

export class GetTrainersSuccess implements Action {
  readonly type = TrainersActionTypes.GET_TRAINERS_SUCCESS;
  constructor(public payload: ReadonlyArray<Trainer>) {}
}

export class GetTrainersError implements Action {
  readonly type = TrainersActionTypes.GET_TRAINERS_ERROR;
  constructor(public payload: Error | string) {}
}

export type TrainersActions = GetTrainers | GetTrainersSuccess | GetTrainersError;
