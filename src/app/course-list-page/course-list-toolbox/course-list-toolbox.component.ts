import { Component, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list-toolbox',
  templateUrl: './course-list-toolbox.component.html',
  styleUrls: ['./course-list-toolbox.component.less']
})
export class CourseListToolboxComponent {
  public searchQuery = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService) { }

  onFilterBtnClick(): void {
    const { page, count} = this.activatedRoute.snapshot.queryParams;
    const q = this.searchQuery.trim().toLowerCase();
    const params = { page: 1, ; }
    if (q) {
      params.q = q;
    }
    this.coursesService.fetchCourses(1, count, q);
    this.router.navigate(['/courses'], { queryParams: params });
  }
}

