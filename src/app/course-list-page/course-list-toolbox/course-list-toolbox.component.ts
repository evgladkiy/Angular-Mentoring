import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import debounces from 'lodash.debounce';

import { Store, select } from '@ngrx/store';
import { AppState, getRouterState } from '../../core/@Ngrx';
import * as CoursesActions from './../../core/@Ngrx/courses/courses.actions';

@Component({
  selector: 'app-course-list-toolbox',
  templateUrl: './course-list-toolbox.component.html',
  styleUrls: ['./course-list-toolbox.component.less']
})
export class CourseListToolboxComponent implements OnInit, OnDestroy {
  public searchQuery: string;
  private routerStateSub: Subscription;
  private routeQ: string;

  private debaunceTime = 300;
  private filterDebounce = debounces((q: string) => {
    this.store.dispatch(new CoursesActions.GetCoursesAndNavigateByQuery(q));
  }, this.debaunceTime);

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchQuery = this.activatedRoute.snapshot.queryParams['q'] || '';

    this.routerStateSub = this.store.pipe(select(getRouterState)).subscribe(
      routerState => {
        this.routeQ = routerState.state.queryParams.q;
      }
    );
  }

  ngOnDestroy(): void {
    this.routerStateSub.unsubscribe();
  }

  onModelChanged(inputValue: string): void {
    const q: string = inputValue.trim().toLowerCase();

    if (q.length >= 3 || (this.routeQ && this.routeQ.length > q.length) ) {
      this.filterDebounce(q);
    }
  }
}
