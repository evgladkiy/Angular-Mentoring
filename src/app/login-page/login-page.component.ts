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
      authService.login(user.login, user.password);
      this.resetUser();
      router.navigate(['/courses']);
    }
  }
}
