import { Component } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less'],
})
export class UserPanelComponent {

  public currentUser: User = {
    id: 12,
    firstName: 'Vasia',
    lastName: 'Pupkin',
  };

  constructor() { }

}
