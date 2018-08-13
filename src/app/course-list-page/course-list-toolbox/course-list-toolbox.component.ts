import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService, ReqParamsService } from '../../shared/services';
import { ReqParams } from '../../shared/models';

@Component({
  selector: 'app-course-list-toolbox',
  templateUrl: './course-list-toolbox.component.html',
  styleUrls: ['./course-list-toolbox.component.less']
})
export class CourseListToolboxComponent {
  public searchQuery = '';

  constructor(private router: Router,
              private reqParamsService: ReqParamsService,
              private coursesService: CoursesService) { }

  onFilterBtnClick(): void {
    const params: ReqParams = this.reqParamsService.getDefaultParams();
    const q = this.searchQuery.trim().toLowerCase();

    if (q) {
      params.q = q;
    }

    this.coursesService.fetchCourses(params.page, params.count, q);
    this.router.navigate(['/courses'], { queryParams: params });
  }
}

