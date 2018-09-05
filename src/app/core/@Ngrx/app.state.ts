import { CoursesState } from './courses/courses.state';
import { UserState } from './user/user.state';
import { TrainersState } from '.';

export interface AppState {
  courses: CoursesState;
  user: UserState;
  trainers: TrainersState;
}
