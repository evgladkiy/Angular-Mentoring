import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, getUser } from '../../@Ngrx';

import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less'],
})
export class UserPanelComponent implements OnInit {
  @Output() logout = new EventEmitter<any>();

  public user: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user = this.store.pipe(select(getUser));
  }

  onLogout(): void {
    this.logout.emit();
  }
}
