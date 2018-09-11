import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../../core/@Ngrx';
import { getRouterState } from '../../../core/@Ngrx/router/router.selector';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.less' ],
})
export class BreadcrumbsComponent implements OnDestroy, OnInit {
  public crumbs: string[];
  private sub: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.sub = this.store.pipe(select(getRouterState)).subscribe((routerState) => {
      this.crumbs = this.parseUrlToCrumbs(routerState.state.url);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private parseUrlToCrumbs(url: string): string[] {
    return url.split('/').slice(1);
  }
}
