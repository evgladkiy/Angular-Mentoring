import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { courses } from './courses';

import { Course } from '../../models/course.model';

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

    return this.courses;
    }
  }

  getCoursebyId(id: string): Course {
    return this.courses.find(course => course._id === id);
  }

  addCourse(newCourse: Course): void {
    this.courses = [ ... this.courses, newCourse ];
  }

  updateCourse(updatedCourse: Course): void {
    this.courses = this.courses.map(course => (
      course._id === updatedCourse._id ? updatedCourse : course
    ));
  }

  deleteCourse(id: string): Course {
    const courseToDelete = this.courses.find(course => course._id === id);

    this.courses = this.courses.filter(course => course._id !== id);

    return courseToDelete;
  }
}
