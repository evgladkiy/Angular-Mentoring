import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/models';
import { AuthService } from '../shared/services/authorization/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.less' ],
})
export class LoginPageComponent implements OnInit {
  private authUrl = 'http://localhost:3000/users/auth';
  public user: Partial<User>;

  constructor(private router: Router,
              private authService: AuthService) { }

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
        this.authService.authenticate(user.login, user.password)
          .then(() => {
            this.resetUser();
            router.navigate(['/courses']);
          })
          .catch(err => console.log(err));
    }
  }
}
