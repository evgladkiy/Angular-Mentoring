import { AuthService } from '../../shared/services/authorization/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.less' ],
})
export class LoginPageComponent implements OnInit {
  public user = {
    login: '',
    password: '',
  };

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout(); // for force open login page
  }

  onSubmit(): void {
    const { user, authService, router } = this;

    if (user.login.trim() !== '' && user.password.trim() !== '') {
      authService.login(user.login, user.password);
      user.login = '';
      user.password = '';
      router.navigate(['/courses']);
    }
  }
}
