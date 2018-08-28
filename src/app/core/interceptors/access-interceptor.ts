import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Store, select } from '@ngrx/store';
import { AppState, getAuthToken } from '../@Ngrx';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {
  private token: string;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(getAuthToken)).subscribe(
      token => this.token = token
    );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.token) {

      return next.handle(req.clone({
        headers: req.headers
          .set('Authorization', this.token)
      }));
    }

    return next.handle(req);
  }
}
