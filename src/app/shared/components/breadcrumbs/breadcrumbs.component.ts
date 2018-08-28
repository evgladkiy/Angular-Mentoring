import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/@Ngrx';
import { getRouterState } from '../../../core/@Ngrx/router/router.selector';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.less' ],
})
export class BreadcrumbsComponent implements OnDestroy {
  public crumbs: string[];
  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private activeRoute: ActivatedRoute) {
      this.store.select(getRouterState).subscribe((router) => {
        this.crumbs = this.parseUrlToCrumbs(router.state.url);

        if (this.sub) {
          this.sub.unsubscribe();
        }

        this.sub = this.activeRoute.firstChild.data.subscribe((data) => {
          if (data.course && this.crumbs.length > 1) {
            this.crumbs[1] = data.course.title;
          }
        });
      });
    }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private parseUrlToCrumbs(url: string): string[] {
    return url.split('/').slice(1);
  }
}
