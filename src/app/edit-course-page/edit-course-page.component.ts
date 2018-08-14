import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

import { CoursesService } from '../shared/services';
import { Course } from '../shared/models';

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
    private coursesService: CoursesService) {
      this.course = this.activeRoute.snapshot.data.course;
    }

  ngOnInit() {
    this.course = { ...this.activeRoute.snapshot.data.course };
  }

  onSubmit(course: Course): void {
    this.coursesService.updateCourse(course);
    this.router.navigate(['/courses']);
  }
}
