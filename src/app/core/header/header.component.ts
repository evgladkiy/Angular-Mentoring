import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  public activeUser: User = {
    id: 12,
    firstName: 'Vasia',
    lastName: 'Pupkin',
  }

  constructor() { }

}
