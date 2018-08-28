import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../core/@Ngrx';
import * as UserActions from './../core/@Ngrx/user/user.actions';

import { User } from '../shared/models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.less' ],
})
export class LoginPageComponent implements OnInit {
  public user: Partial<User>;

  constructor(private store: Store<AppState>) { }

  private resetUser(): void {
    this.user = {
      login: '',
      password: '',
    };
  }

  ngOnInit() {
    this.store.dispatch(new UserActions.Logout());   // for force open login page
    this.resetUser();
  }

  onSubmit(): void {
    const { login, password } = this.user;

    if (login.trim() !== '' && password.trim() !== '') {
      this.store.dispatch(new UserActions.Authenticate(this.user));
    }
  }
}
