import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import debounces from 'lodash.debounce';

import { CoursesService, ReqParamsService } from '../../shared/services';
import { ReqParams } from '../../shared/models';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list-toolbox',
  templateUrl: './course-list-toolbox.component.html',
  styleUrls: ['./course-list-toolbox.component.less']
})
export class CourseListToolboxComponent implements OnInit, OnDestroy {
  public searchQuery: string;
  private inputValueSub: Subscription;
  private inlutValueChannel = new Subject<string>();
  private inlutValueChannel$ = this.inlutValueChannel.asObservable();
  private debaunceTime = 300;
  private filterDebounce = debounces((q: string) => {
    const params: ReqParams = this.reqParamsService.getDefaultParams();

    if (q) {
      params.q = q;
    }

    this.coursesService.fetchCourses(params.page, params.count, q);
    this.router.navigate(['/courses'], { queryParams: params });
    }, this.debaunceTime);

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private reqParamsService: ReqParamsService,
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.searchQuery = this.activatedRoute.snapshot.queryParams['q'] || '';
    this.inputValueSub = this.inlutValueChannel$.subscribe(
      q => this.filterDebounce(q)
    );
  }

  ngOnDestroy(): void {
    this.inputValueSub.unsubscribe();
  }

  onModelChanged(inputValue: string): void {
    const q: string = inputValue.trim().toLowerCase();
    const routeQ = this.activatedRoute.snapshot.queryParams['q'];

    if (q.length >= 3 || (routeQ && routeQ.length > q.length) ) {
      this.inlutValueChannel.next(q);
    }
  }
}
