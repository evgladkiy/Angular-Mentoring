import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Course } from '../course.model';

import { CoursesService } from '../courses.service';
import { AuthService } from './../../shared/services';

import { CoursesFilterPipe } from './courses-filter.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
  providers: [ CoursesFilterPipe ],
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[];
  public courseToDelete: Course;
  public pagePath: string[] = ['Courses', 'Next-Page'];
  public coursesPerPage = '4';
  public shouldShowModal = false;

  constructor(
    private router: Router,
    private coursesServise: CoursesService,
    private authServise: AuthService,
    private coursesFilterPipe: CoursesFilterPipe,
  ) { }

  ngOnInit(): void {
    if (!this.authServise.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.courses = [...this.coursesServise.getCourses()];
    }
  }

  onDeleteBtnPressed(id: string): Course {
    const courseToDeleteIndex: number = this.courses.findIndex(course => course._id === id);

    if (courseToDeleteIndex >= 0) {
      this.courseToDelete = this.courses[courseToDeleteIndex];
      this.shouldShowModal = true;
    }

    return this.courseToDelete;
  }

  onSubmitModal(): void {
    const courseToDeleteId = this.courseToDelete._id;

    this.courses = this.courses.filter(course => course._id !== courseToDeleteId);
    this.coursesServise.deleteCourse(courseToDeleteId);
    this.shouldShowModal = false;
  }

  onCloseModal(): void {
    this.shouldShowModal = false;
    this.courseToDelete = null;
  }

  onFiltredCourse(value: string): void {
    this.courses = this.coursesFilterPipe.transform(this.coursesServise.getCourses(), value);
  }
}
