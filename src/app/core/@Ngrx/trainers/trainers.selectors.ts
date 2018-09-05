import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TrainersState } from './trainers.state';

export const getTrainersState = createFeatureSelector<TrainersState>('trainers');

export const getTrainers = createSelector(
  getTrainersState,
  (state: TrainersState) => state.trainers
);

export const getTrainersLoaded = createSelector(
  getTrainersState,
  (state: TrainersState) => state.loaded
);

