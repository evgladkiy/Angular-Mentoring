import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { delay } from 'rxjs/operators';

import { CoursesService } from '../shared/services';
import { Course } from '../shared/models';
import { SpinnerService } from '../core/components/spinner/spinner.service';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: [ './edit-course-page.component.less' ],
})
export class EditCoursePageComponent implements OnInit {
  public course: Course;

  constructor (
    private router: Router,
    private activeRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private coursesService: CoursesService) {
      this.course = this.activeRoute.snapshot.data.course;
    }

  ngOnInit() {
    this.course = { ...this.activeRoute.snapshot.data.course };
  }

  onSubmit(course: Course): void {
    this.spinnerService.showSpinner();
    this.coursesService.updateCourse(course)
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
