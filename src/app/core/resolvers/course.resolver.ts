import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Course } from '../../shared/models';
import { CoursesService } from '../../shared/services';
import { Store, select } from '@ngrx/store';
import { AppState } from '../@Ngrx';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(
    private store: Store<AppState>,
    private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const id = route.paramMap.get('id');

    return this.coursesService.getCoursebyId(id);
  }
}
