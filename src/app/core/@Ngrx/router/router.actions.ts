import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export enum RouterActionTypes {
  GO = '[Router] GO'
}

export class Go implements Action {
  readonly type = RouterActionTypes.GO;
  constructor(
    public payload: {
      path: any[];
      queryParams?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export type RouterActions = Go;
