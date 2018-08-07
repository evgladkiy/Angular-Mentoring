import { Component, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.less' ],
})
export class BreadcrumbsComponent implements OnDestroy {
  public crumbs: string[];
  private sub: Subscription;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute) {
      this.sub = this.router.events.subscribe((event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.crumbs = this.parseUrlToCrumbs(event.urlAfterRedirects, this.activeRoute.firstChild);
          this.activeRoute.firstChild.data.subscribe((data) => {
            if (data.course) {
              this.crumbs[1] = data.course.title;
            }
          });
        }
      });
    }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private parseUrlToCrumbs(url: string, routeChild: ActivatedRoute): string[] {
    return url.split('/').slice(1);
  }
}
