import { Trainer } from '../../../shared/models';

export interface TrainersState {
  trainers: ReadonlyArray<Trainer>;
  loading: boolean;
  loaded: boolean;
  error: Error | string;
}

export const initialTrainersState: TrainersState = {
  trainers: [],
  loading: false,
  loaded: false,
  error: null,
};
