import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursesPageComponent } from './courses-page.component';
import { courses as coursesMock } from './courses';
import { Course } from '../course.model';
import { CapitalizedPipe } from '../../shared/pipes';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  const defaultCourses: Course[] = coursesMock;
  const courses: Course[] = [...defaultCourses];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    component.courses = courses;
    fixture.detectChanges();
  });

  it('should correctly delete course by Id', () => {
    const deletedCourse: Course = component.onDeleteCourse(courses[0]._id);
    expect(deletedCourse).toEqual(courses[0]);
    expect(component.courses.length).toBe(courses.length - 1);
  });

  it('onDeleteCourse method should correctly work when passed invalid id', () => {
    const deletedCourse: Course = component.onDeleteCourse('invalidId');

    expect(deletedCourse).toEqual(null);
    expect(component.courses.length).toBe(courses.length);
  });
});
