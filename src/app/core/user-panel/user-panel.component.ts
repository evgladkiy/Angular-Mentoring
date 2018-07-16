import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less'],
})
export class UserPanelComponent {
  @Input() currentUser: User;
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  onLogout(): void {
    this.logout.emit();
  }
}
