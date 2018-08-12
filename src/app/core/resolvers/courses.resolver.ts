import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Course } from '../../shared/models';
import { CoursesService } from '../../shared/services';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(
    private coursesService: CoursesService,
    private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Course> {
    const id = route.paramMap.get('id');

    return this.coursesService.getCoursebyId(id);
  }
}
