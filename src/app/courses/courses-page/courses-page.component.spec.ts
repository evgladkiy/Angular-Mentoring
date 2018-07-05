import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursesPageComponent } from './courses-page.component';

import { Course } from '../course.model';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  const courseToDeleteId = '123599f0d880855dde';
  const courses = [
    {
      _id: '123599f0d880855dde',
      author: 'Cochran Juliette',
      img: 'https://loremflickr.com/400/200?random=2',
      creationDate: new Date('2018-05-25T09:59:24'),
      duration: 217,
      // tslint:disable-next-line:max-line-length
      description: 'Amet amet proident duis deserunt in occaecat. Ullamco culpa elit sit culpa ullamco magna fugiat non tempor eu magna. Duis amet anim cillum nostrud voluptate incididunt. Proident nostrud sint aute fugiat ex.',
      title: 'Consequat minim fugiat magna esse magna ipsum mollit sint',
    },
    {
      _id: '5b2fe37c5599f0d880855dde',
      author: 'Juliette Cochran',
      img: 'https://loremflickr.com/400/200?random=2',
      creationDate: new Date('2018-05-25T09:59:24'),
      duration: 267,
      // tslint:disable-next-line:max-line-length
      description: 'Amet amet proident duis deserunt in occaecat. Ullamco culpa elit sit culpa ullamco magna fugiat non tempor eu magna. Duis amet anim cillum nostrud voluptate incididunt. Proident nostrud sint aute fugiat ex.',
      title: 'Consequat minim fugiat magna esse magna ipsum mollit sint',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
