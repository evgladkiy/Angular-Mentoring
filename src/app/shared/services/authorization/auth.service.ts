import { Injectable } from '@angular/core';

import { User } from './../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private activeUser: User;
  constructor() { }

  login(login: string, password: string): User {
    this.activeUser = {
      _id: '42',
      login,
      password,
    };
    localStorage.setItem('activeUser', JSON.stringify(this.activeUser));

    return this.activeUser;
  }

  logout(): void {
    localStorage.removeItem('activeUser');
    this.activeUser = null;
  }

  isAuthenticated(): boolean {
    if (!this.activeUser) {
      this.activeUser = JSON.parse( localStorage.getItem('activeUser'));

      return !!this.activeUser;
    }
    return true;
  }

  getUserInfo(): User {
    if (!this.activeUser) {
      this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
    }
    return this.activeUser;
  }
}
