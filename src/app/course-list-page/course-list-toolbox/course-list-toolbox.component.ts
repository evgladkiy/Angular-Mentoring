import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import debounces from 'lodash.debounce';

import { CoursesService, ReqParamsService } from '../../shared/services';
import { SpinnerService } from '../../core/components/spinner/spinner.service';
import { ReqParams } from '../../shared/models';

@Component({
  selector: 'app-course-list-toolbox',
  templateUrl: './course-list-toolbox.component.html',
  styleUrls: ['./course-list-toolbox.component.less']
})
export class CourseListToolboxComponent implements OnInit, OnDestroy {
  public searchQuery: string;
  private inputValueSub: Subscription;
  private coursesSub: Subscription;
  private inlutValueChannel = new Subject<string>();
  private inlutValueChannel$ = this.inlutValueChannel.asObservable();
  private debaunceTime = 300;
  private filterDebounce = debounces((q: string) => {
    const params: ReqParams = this.reqParamsService.getDefaultParams();

    if (q) {
      params.q = q;
    }

    if (this.coursesSub) {
      this.coursesSub.unsubscribe();
    }

    this.spinnerService.showSpinner();
    this.router.navigate(['/courses'], { queryParams: params });
    this.coursesSub = this.coursesService.fetchCourses(params.page, params.count, q).subscribe(
      () => this.spinnerService.hideSpinner()
    );
  }, this.debaunceTime);

  constructor(private router: Router,
              private spinnerService: SpinnerService,
              private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private reqParamsService: ReqParamsService) { }

  ngOnInit(): void {
    this.searchQuery = this.activatedRoute.snapshot.queryParams['q'] || '';
    this.inputValueSub = this.inlutValueChannel$.subscribe(
      q => this.filterDebounce(q)
    );
  }

  ngOnDestroy(): void {
    this.inputValueSub.unsubscribe();
    this.coursesSub.unsubscribe();
  }

  onModelChanged(inputValue: string): void {
    const q: string = inputValue.trim().toLowerCase();
    const routeQ = this.activatedRoute.snapshot.queryParams['q'];

    if (q.length >= 3 || (routeQ && routeQ.length > q.length) ) {
      this.inlutValueChannel.next(q);
    }
  }
}
