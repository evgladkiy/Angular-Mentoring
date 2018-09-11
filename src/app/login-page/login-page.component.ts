import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, getUserError } from '../core/@Ngrx';
import * as UserActions from './../core/@Ngrx/user/user.actions';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.less' ],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public userLoadingErrorSub: Subscription;
  public shouldShowError = false;
  public userForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userLoadingErrorSub = this.store.pipe(select(getUserError)).subscribe(
      error => this.shouldShowError = Boolean(error)
    );
    this.store.dispatch(new UserActions.Logout());
    this.resetForm();  // for force open login page
  }

  ngOnDestroy(): void {
    this.userLoadingErrorSub.unsubscribe();
  }

  onSubmit(): void {
    const { value: user, value: { login, password } } = this.userForm;

    if (login.trim() !== '' && password.trim() !== '') {
      this.store.dispatch(new UserActions.Authenticate(user));
    }
  }

  onModelChanged(val): void {
    this.shouldShowError = false;
  }

  private resetForm(): void {
    this.userForm.setValue({
      login: '',
      password: ''
    });
  }
}
