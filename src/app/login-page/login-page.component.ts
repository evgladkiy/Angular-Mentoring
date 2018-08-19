import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

import { User } from '../shared/models';
import { AuthService } from '../shared/services/authorization/auth.service';
import { SpinnerService } from '../core/components/spinner/spinner.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.less' ],
})
export class LoginPageComponent implements OnInit {
  public user: Partial<User>;

  constructor(private router: Router,
              private authService: AuthService,
              private spinnerService: SpinnerService) { }

  private resetUser(): void {
    this.user = {
      login: '',
      password: '',
    };
  }

  ngOnInit() {
    this.authService.logout();     // for force open login page
    this.resetUser();
  }

  onSubmit(): void {
    const { user, authService, router } = this;

    if (user.login.trim() !== '' && user.password.trim() !== '') {
      this.spinnerService.showSpinner();
      authService.authenticate(user.login, user.password)
        .subscribe(
          () => {
            this.resetUser();
            this.spinnerService.hideSpinner();
            router.navigate(['/courses']);
          },
          (err) => {
            console.error(err.error);
            this.spinnerService.hideSpinner();
          }
      );
    }
  }
}
