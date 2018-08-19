import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

import { Course } from '../shared/models';
import { CoursesService } from '../shared/services';
import { SpinnerService } from '../core/components/spinner/spinner.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: [ './add-course-page.component.less' ],
})
export class AddCoursePageComponent {

  constructor (
    private router: Router,
    private spinnerService: SpinnerService,
    private coursesService: CoursesService) { }

  onSubmit(course: Course): void {
    this.spinnerService.showSpinner();
    this.coursesService.addCourse(course)
      .pipe(delay(500))
      .subscribe((res) => {
        if (res.status !== 'OK') {
          console.log(res.msg);
        }
        this.spinnerService.hideSpinner();
        this.router.navigate(['/courses']);
      });
  }
}
