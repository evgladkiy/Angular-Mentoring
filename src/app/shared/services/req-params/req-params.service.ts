import { Injectable } from '@angular/core';
import { ReqParams } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReqParamsService {
  private defaultCoursesPerPage = 5;
  private defaultCoursesPage = 1;

  constructor(private activatedRoute: ActivatedRoute) { }

  getDefaultParams(): ReqParams {
    return {
      page: this.defaultCoursesPage,
      count: this.defaultCoursesPerPage,
    };
  }

  getParams(): ReqParams {
    const page = Number(this.activatedRoute.snapshot.queryParams['page']) || this.defaultCoursesPage;
    const count = Number(this.activatedRoute.snapshot.queryParams['count']) || this.defaultCoursesPerPage;
    const q = this.activatedRoute.snapshot.queryParams['q'];
    const params: ReqParams = { page, count };

    if (q) {
      params.q = q;
    }

    return params;
  }
}
