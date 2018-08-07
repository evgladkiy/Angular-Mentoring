import { Injectable } from '@angular/core';

import { courses } from './courses';
import { Course } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[];
  private typesOfCourse: string[] = ['Training', 'Lecture', 'Video course', 'Seminar'];
  private coursesDifficulty: string[] = ['For All', 'Novice', 'Intermediate', 'Advanced', 'Expert'];

  constructor() {
    this.init();
   }

  getCourses(): Course[] {
    return this.courses;
  }

  getCoursebyId(id: string): Course {
    return this.courses.find(course => course._id === id);
  }

  getCourseTitleByid(id: string): string {
    const searchedCourse: Course = this.courses.find(course => course._id === id);

    return searchedCourse._id;
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
  getTypesOfCourses(): string[] {
    return this.typesOfCourse;
  }

  getDifficultyOfCourses(): string[] {
    return this.coursesDifficulty;
  }

  init(): void {
    this.courses = courses.map(course => (
      {
        ...course,
        date: new Date(course.date)
      }
    ));
  }
}
