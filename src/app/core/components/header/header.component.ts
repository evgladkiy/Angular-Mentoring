import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, getIsUserAuthorized } from '../../@Ngrx';
import * as UserActions from './../../@Ngrx/user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.less' ],
})
export class HeaderComponent implements OnInit {
  public isUserAuthorized: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isUserAuthorized = this.store.pipe(select(getIsUserAuthorized));
    this.store.dispatch(new UserActions.Initialize());
  }

  onLogout(): void {
    this.store.dispatch(new UserActions.Logout());
  }
}
