import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from '../shared/services';
import { Course } from '../shared/models';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: [ './edit-course-page.component.less' ],
})
export class EditCoursePageComponent implements OnInit, OnDestroy {
  public course: Course;
  private sub: Subscription;

  constructor (
    private router: Router,
    private activeRoute: ActivatedRoute,
    private coursesService: CoursesService) {
    }

  ngOnInit() {
    this.sub = this.activeRoute.data.subscribe(({ course }) => {
      this.course = course;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    }

  onSubmit(course: Course): void {
    this.coursesService.updateCourse(course);
    this.router.navigate(['/courses']);
  }
}