import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/authorization/auth.service';
import { Component, OnInit } from '@angular/core';

import { CoursesFilterPipe } from './courses-filter.pipe';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.less'],
    providers: [CoursesFilterPipe],
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[];
  public pagePath: string[] = ['Courses', 'Next-Page'];
  public coursesPerPage = '5';
  public shouldShowCourses: boolean;

  constructor(
    private router: Router,
    private coursesServise: CoursesService,
    private authServise: AuthService,
    private coursesFilterPipe: CoursesFilterPipe,
  ) { }

  ngOnInit() {
    if (!this.authServise.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.shouldShowCourses = false;
      this.courses = [...this.coursesServise.getCourses()];
    }
  }

  onDeleteCourse(id: string): Course {
    const courseToDeleteIndex: number = this.courses.findIndex(course => course._id === id);
    let courseToDelete: Course = null;

    if (courseToDeleteIndex >= 0) {
      courseToDelete = this.courses[courseToDeleteIndex];
      this.courses = this.courses.filter(course => course._id !== id);
      this.coursesServise.deleteCourse(id);
    }

    return courseToDelete;
  }

  onFiltredCourse(value: string): void {
    this.courses = this.coursesFilterPipe.transform(this.coursesServise.getCourses(), value);
  }

  toggleCoursesVisibility(): void {
    this.shouldShowCourses = !this.shouldShowCourses;
  }
}
