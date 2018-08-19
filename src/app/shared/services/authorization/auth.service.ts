import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { User } from '../../models/user.model';
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

  fetchUserInfo(token?: string): void {
    const userToken = token || this.getTokenFromStore();

    this.http
      .get<User>(`${this.authUrl}/userInfo`, {
        params: { token: userToken }
      })
      .pipe(delay(500))
      .subscribe((userInfo) => {
        this.activeUserChannel.next(userInfo);
        return userInfo;
      });
  }

  logout(): void {
    this.deleteTokenFromStore();
    this.activeUserChannel.next(null);
  }

  authenticate(user: string, password: string): Observable<string> {
    return this.http
      .get<TokenRes>(`${this.authUrl}/auth`, {
        params: {
          user: user,
          password: password,
        }
      })
      .pipe(
        map(({ token }) => {
          this.setTokenToStore(token);
          this.fetchUserInfo(token);
          return token;
        })
      );
  }

  isAuthenticated(): boolean {
    return Boolean(this.getTokenFromStore());
  }

  getToken(): string {
    return this.getTokenFromStore();
  }
}
