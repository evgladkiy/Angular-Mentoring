import { Course } from './../course.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { CourseListComponent } from './course-list.component';
//
describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseListEl: DebugElement;
  const courseList = [
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
      declarations: [ CourseListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

    courseListEl = fixture.debugElement.query(By.css('.course-container'));
    component.courses = courseList;
    fixture.detectChanges();
  });

  it('course list should have correct numbers of items', () => {
    const coursesElem: HTMLElement = courseListEl.nativeElement;
    expect(coursesElem.children.length).toBe(courseList.length);
  });

  it('should raise delete course event when deleted', () => {
    let courseToDeleteId: string;
    const courseListitem1 = courseListEl.children[0];
    const courseListitem2 = courseListEl.children[1];
    const course1Id = courseListitem1.nativeElement.course._id;
    const course2Id = courseListitem2.nativeElement.course._id;

    component.deleted.subscribe((id: string) => courseToDeleteId = id);

    courseListitem1.triggerEventHandler('deleted', course1Id);
    expect(courseToDeleteId).toBe(courseList[0]._id);

    courseListitem2.triggerEventHandler('deleted', course2Id);
    expect(courseToDeleteId).toBe(courseList[1]._id);
  });
});
