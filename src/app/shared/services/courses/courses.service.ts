import { Injectable } from '@angular/core';

import { courses } from './courses';

import { Course } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[];

  constructor() { }

  getCourses(): Course[] {
    if (!this.courses) {
      this.courses = courses.map(course => (
        {
          ...course,
          date: new Date(course.date)
        }
      ));
    }

    return this.courses;
  }

  getCoursebyId(id: string): Course {
    return this.courses.find(course => course._id === id);
  }

  addCourse(newCourse: Course): void {
    this.courses = [ ... this.courses, newCourse ];
  }

  updateCourse(updatedProps: Partial<Course>): void {
    const updatedCourse = this.courses.find(course => course._id === updatedProps._id);

    this.courses = this.courses.filter(course => course._id !== updatedCourse._id);
    this.courses = [
      ...this.courses,
      { ...updatedCourse, ...updatedProps }
    ];
  }

  deleteCourse(id: string): Course {
    const courseToDelete = this.courses.find(course => course._id === id);

    this.courses = this.courses.filter(course => course._id !== id);

    return courseToDelete;
  }
}
