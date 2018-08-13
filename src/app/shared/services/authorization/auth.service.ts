import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';

import { User } from '../../models/user.model';
import { throwError, Observable, Subject } from 'rxjs';
import { TokenRes } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'token';
  private authUrl = 'http://localhost:3000/users';
  private activeUserChannel = new Subject<User>();
  public activeUserChannel$ = this.activeUserChannel.asObservable();

  constructor(private http: HttpClient) { }

  private getTokenFromStore(): string {
    return localStorage.getItem(this.storageKey);
  }

  private setTokenToStore(token: string): void {
    localStorage.setItem(this.storageKey, token);
  }

  private deleteTokenFromStore(): void {
    localStorage.removeItem(this.storageKey);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
  }

  login(token?: string) {
    const userToken = token || this.getTokenFromStore();

    return this.http
      .get<User>(`${this.authUrl}/userInfo`, {
        params: { token: userToken }
      })
      .toPromise()
      .then(user => this.activeUserChannel.next(user));
  }

  logout(): void {
    this.deleteTokenFromStore();
    this.activeUserChannel.next(null);
  }

  authenticate(user: string, password: string) {
    return this.http
      .get<TokenRes>(`${this.authUrl}/auth`, {
        params: {
          user: user,
          password: password,
        }
      })
      .toPromise()
      .then(res => {
        this.setTokenToStore(res.token);
        return this.login(res.token);
      })
      .catch(err => {
        this.handleError(err);
        return throwError('Something bad happened; please try again later.');
      } );
  }

  isAuthenticated(): boolean {
    return Boolean(this.getTokenFromStore());
  }

  getToken(): string {
    return this.getTokenFromStore();
  }
}
