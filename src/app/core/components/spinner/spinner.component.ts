import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, getIsCoursesLoading, getIsUserLoading } from '../../@Ngrx';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {
  public coursesLoading$: Observable<boolean>;
  public userLoading$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.coursesLoading$ = this.store.pipe(select(getIsCoursesLoading));
    this.userLoading$ = this.store.pipe(select(getIsUserLoading));
  }
}
