import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let coursesService: CoursesService;
  const courseId = '5b2fe37c41276c92f5976eb2';
  const invalidId = '12';
  const numberOfDefaulltCourses = 6;
  const course = {
    _id: '5b2fe37c41276c92f5976eb2',
    author: 'Tillman Hardin',
    img: 'https://loremflickr.com/400/200?random=6',
    creationDate: new Date('2018-05-13T04:21:21'),
    duration: 53,
    // tslint:disable-next-line:max-line-length
    description: 'Labore nisi Lorem ad commodo. Officia ullamco in est amet. Ad sit minim tempor et nostrud cupidatat voluptate. Enim commodo cillum elit mollit anim aute sunt ut in et sint. Nisi labore excepteur tempor Lorem laborum. Eiusmod ut ea magna duis occaecat id laborum exercitation reprehenderit labore laborum.\r\n',
    title: 'eu excepteur cillum nisi consectetur ex sint nisi est amet',
  };

  beforeEach(() => coursesService = new CoursesService());

  it('getCourses should return all default courses', () => {
    expect(coursesService.getCourses().length).toBe(numberOfDefaulltCourses);
  });

  it('getCourseById should return popper course', () => {
    expect(coursesService.getCourseById(courseId)).toEqual(course);
  });

  it('getCourseById should process invalid id, and return null', () => {
    expect(coursesService.getCourseById(invalidId)).toBe(null);
  });

  it('deleteCourse should delete popper course by id', () => {
    expect(coursesService.deleteCourse(courseId)).toEqual(course);
    expect(coursesService.getCourses().length).toBe(5);
  });

  it('deleteCourse should process invalid id, and return null', () => {
    expect(coursesService.deleteCourse(invalidId)).toBe(null);
    expect(coursesService.getCourses().length).toBe(numberOfDefaulltCourses);
  });
});
