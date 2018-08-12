import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../shared/services';
import { User } from '../../../shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.less' ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private activeUserSub: Subscription;
  private activeUser: User;
  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.activeUserSub = this.authService.activeUserChannel$.subscribe(
      user => this.activeUser = user
    );

    const isUserisAuthenticated = this.authService.isAuthenticated();

    if (isUserisAuthenticated && !this.activeUser) {
      this.authService.login();
    }
  }

  ngOnDestroy(): void {
    this.activeUserSub.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
