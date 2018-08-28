import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of, Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, getAuthToken } from '../@Ngrx';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private token: string;

  constructor(
    private router: Router,
    private store: Store<AppState>) {
      this.store.pipe(select(getAuthToken)).subscribe(
        token => this.token = token
      );
    }

  canActivate(): Observable<boolean> {
    if (!this.token) {
      this.router.navigate(['/login']);

      return of(false);
    }

    return of(true);
  }
}
