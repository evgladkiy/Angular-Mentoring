import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model';
import { TokenRes } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'token';
  private authUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getTokenFromStore(): string {
    return localStorage.getItem(this.storageKey);
  }

  setTokenToStore(token: string): void {
    localStorage.setItem(this.storageKey, token);
  }

  deleteTokenFromStore(): void {
    localStorage.removeItem(this.storageKey);
  }

  fetchUserInfo(token?: string): Observable<User> {
    const userToken = token || this.getTokenFromStore();

    return this.http
      .get<User>(`${this.authUrl}/userInfo`, {
        params: { token: userToken }
      });
  }

  authenticate(user: string, password: string): Observable<TokenRes> {
    return this.http
      .get<TokenRes>(`${this.authUrl}/auth`, {
        params: {
          user: user,
          password: password,
        }
      });
  }
}
