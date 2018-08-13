import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { AuthService } from '../../shared/services';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.authService.isAuthenticated()) {
      const token = this.authService.getToken();
      const authReq = req.clone({
        headers: req.headers
          .set('Authorization', token)
          .set('Content-Type', 'application/json')
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
