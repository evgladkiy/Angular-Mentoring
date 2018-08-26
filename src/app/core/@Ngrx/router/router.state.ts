import {
  Params,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { ActionReducerMap } from '@ngrx/store';
import {
  RouterReducerState,
  RouterStateSerializer,
  routerReducer
} from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  fragment: string;
}

export interface RouterState {
  router: RouterReducerState<RouterState>;
}

export const routerReducers: ActionReducerMap<RouterState> = {
  router: routerReducer
};

export class RouterSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params, fragment } = state;

    return { url, queryParams, params, fragment };
  }
}

export const RouterStateSerializerProvider = {
  provide: RouterStateSerializer,
  useClass: RouterSerializer,
};


