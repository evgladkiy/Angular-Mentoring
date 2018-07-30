import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.less' ],
})
export class HeaderComponent {
  constructor(private router: Router,
              public authService: AuthService) { }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
