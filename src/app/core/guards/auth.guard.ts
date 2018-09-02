import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, getAuthToken } from '../@Ngrx';
import * as RouterActions from './../@Ngrx/router/router.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private token: string;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(getAuthToken)).subscribe(
      token => this.token = token
    );
  }

  canActivate(): Observable<boolean> {
    if (!this.token) {
      this.store.dispatch(new RouterActions.Go({ path: ['/login'] }));

      return of(false);
    }

    return of(true);
  }
}
