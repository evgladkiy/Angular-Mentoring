import { Component, OnInit } from '@angular/core';

import { CoursesFilterPipe } from './courses-filter.pipe';
import { CapitalizedPipe } from './../../shared/pipes/capitalized/capitalized.pipe';
import { Course } from '../course.model';
import { courses } from './courses';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.less'],
    providers: [CoursesFilterPipe, CapitalizedPipe],
})
export class CoursesPageComponent implements OnInit {
  private defaultCourses: Course[] = courses;
  public courses: Course[];
  public pagePath: string[] = ['Courses', 'Next-Page'];
  public coursesPerPage = '2';
  public shouldShowCourses: boolean;

  constructor(
    private coursesFilterPipe: CoursesFilterPipe,
    private capitalized: CapitalizedPipe
  ) { }

  ngOnInit() {
    this.shouldShowCourses = false;
    this.courses = [...this.defaultCourses];
  }

  onDeleteCourse(id: string): Course {
    const courseToDeleteIndex: number = this.courses.findIndex(course => course._id === id);
    let courseToDelete: Course = null;

    if (courseToDeleteIndex >= 0) {
      courseToDelete = this.courses[courseToDeleteIndex];
      this.courses = this.courses.filter(course => course._id !== id);
      this.defaultCourses = this.defaultCourses.filter(course => course._id !== id);
    }

    return courseToDelete;
  }

  onFiltredCourse(value: string): void {
    this.courses = this.coursesFilterPipe.transform(this.defaultCourses, value);
  }

  toggleCoursesVisibility(): void {
    this.shouldShowCourses = !this.shouldShowCourses;
  }
}
