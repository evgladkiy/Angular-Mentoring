import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { User } from '../../shared/models/user.model';

import { AuthService } from './../../shared/services/authorization/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less'],
})
export class UserPanelComponent implements OnInit {
  @Input() currentUser: User:
  @Output() logout = new EventEmitter<>();

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    console.log(this.currentUser);
  }

  onLogout(): void {
    this.logout.emit()
  }
}
