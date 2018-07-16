import { Injectable } from '@angular/core';

import { User } from './../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private activeUser: User;
  private storageKey: 'activeUser';

  constructor() { }

  private getUserFromStore(): User {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  private settUserToStore(user: User): void {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }
  private deleteUserFromStore(): void {
    localStorage.removeItem(this.storageKey);
  }

  login(login: string, password: string): User {
    this.activeUser = {
      _id: '42',
      login,
      password,
    };
    this.settUserToStore(this.activeUser);

    return this.activeUser;
  }

  logout(): void {
    this.deleteUserFromStore();
    this.activeUser = null;
  }

  isAuthenticated(): boolean {
    if (!this.activeUser) {
      this.activeUser = this.getUserFromStore();

      return !!this.activeUser;
    }

    return true;
  }

  getUserInfo(): User {
    if (!this.activeUser) {
      this.activeUser = this.getUserFromStore();
    }

    return this.activeUser;
  }
}
