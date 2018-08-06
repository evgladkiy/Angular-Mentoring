import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../shared/models';
import { CoursesService } from '../shared/services';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: [ './add-course-page.component.less' ],
})
export class AddCoursePageComponent {

  constructor (
    private router: Router,
    private coursesService: CoursesService) { }

  onSubmit(course: Course): void {
    this.coursesService.addCourse(course);
    this.router.navigate(['/courses']);
  }
}
