import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../core/@Ngrx';
import * as UserActions from './../core/@Ngrx/user/user.actions';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.less' ],
})
export class LoginPageComponent implements OnInit {
  public userForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new UserActions.Logout());   // for force open login page
    this.userForm.setValue({
      login: '',
      password: ''
    });
  }

  onSubmit(): void {
    const { value: user, value: { login, password } } = this.userForm;
    if (login.trim() !== '' && password.trim() !== '') {
      this.store.dispatch(new UserActions.Authenticate(user));
    }
  }
}
