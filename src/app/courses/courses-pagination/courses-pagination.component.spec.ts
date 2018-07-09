import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPaginationComponent } from './courses-pagination.component';
import { Component, DebugElement } from '@angular/core';
import { Course } from './../course.model';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <app-courses-pagination
    [courses-per-page]="coursesPerPage" [courses]="courses">
  </app-courses-pagination>`
})
class TestHostComponent {
  public coursesPerPage = '5';
  public courses: Course[] = [
    {
      _id: '5b2fe37c8c5ca891d2428f1e',
      author: 'Patty Gay',
      img: 'https://loremflickr.com/400/200?random=3',
      creationDate: new Date('2018-05-14T11:56:22'),
      duration: 111,
      // tslint:disable-next-line:max-line-length
      description: 'Laboris consequat reprehenderit duis in ea laboris dolore. Nisi id laboris commodo incididunt do ullamco minim. Sit veniam mollit quis cupidatat consectetur dolore esse fugiat aliquip sunt. Elit exercitation nisi irure in ipsum dolore.\r\nQuis sit dolor adipisicing nulla tempor duis reprehenderit ut magna pariatur magna ullamco reprehenderit. Tempor deserunt ad reprehenderit occaecat esse labore veniam velit veniam proident. Elit eiusmod tempor cillum incididunt elit veniam laborum. Dolor id consequat culpa non exercitation quis esse dolore qui voluptate cupidatat deserunt occaecat.\r\nAliquip consequat esse proident anim anim cupidatat. Commodo anim est magna occaecat ea officia laborum culpa fugiat duis qui. Dolor irure commodo culpa occaecat incididunt do et reprehenderit. Magna nostrud reprehenderit pariatur veniam id. Ipsum anim pariatur eu amet qui duis ut mollit anim tempor et dolore. Incididunt tempor amet amet occaecat anim cupidatat esse.\r\n',
      title: 'occaecat sint adipisicing labore consequat excepteur elit esse ullamco consectetur',
      topRated: true,
    },
    {
      _id: '5b2fe37c1f042cea7d823c91',
      author: 'Pauline Turner',
      img: 'https://loremflickr.com/400/200?random=4',
      creationDate: new Date('2018-04-15T04:18:00'),
      duration: 92,
      // tslint:disable-next-line:max-line-length
      description: 'Aute aliquip elit irure duis mollit ipsum minim. Minim voluptate ipsum velit adipisicing exercitation labore cillum proident ad reprehenderit. Cillum nostrud dolor sunt adipisicing dolore veniam aliquip sint. Aliqua elit nostrud et deserunt velit consequat ut ex exercitation. Laboris tempor ad sit amet enim exercitation ullamco tempor veniam ullamco ex. Adipisicing fugiat excepteur ut cupidatat tempor veniam. Minim ipsum ad esse incididunt in culpa fugiat nulla in aliquip non ea culpa minim.\r\nIn ut fugiat proident aute exercitation cillum proident sunt nostrud aliqua anim qui irure. Aute ipsum ex aliquip esse consequat ea. Id aliqua officia tempor labore do ipsum veniam pariatur deserunt labore. Consectetur sint minim incididunt ullamco officia consequat proident enim id et irure. Amet ea labore in commodo duis qui.\r\nAnim fugiat velit aute qui nisi laborum. Cillum aliquip labore elit ut consectetur. Elit do officia laboris mollit.\r\n',
      title: 'velit cupidatat veniam sunt pariatur tempor consectetur cillum dolor',
      topRated: true,
  },
    {
      _id: '5b2fe37cf359cda3e50d5e89',
      author: 'Cassie Cantrell',
      img: 'https://loremflickr.com/400/200?random=5',
      creationDate: new Date('2018-05-29T03:50:00'),
      duration: 94,
      // tslint:disable-next-line:max-line-length
      description: 'Esse amet in cupidatat irure anim sint. Id id occaecat Lorem Lorem Lorem consequat sit irure do. Eiusmod eiusmod labore deserunt quis amet magna dolore culpa dolore fugiat do incididunt exercitation. Tempor occaecat aliquip non non laboris dolore in ut. Cillum nulla in laborum nulla pariatur exercitation nostrud culpa aliquip proident sint.\r\nAliqua sit enim est eu exercitation aliquip occaecat tempor officia ullamco. Minim exercitation culpa duis cillum irure voluptate. Id ex culpa eu culpa irure cupidatat pariatur mollit exercitation fugiat in et velit aliquip.\r\n',
      title: 'sint irure aute veniam eu',
      topRated: false,
    },
    {
      _id: '5b2fe37c41276c92f5976eb2',
      author: 'Tillman Hardin',
      img: 'https://loremflickr.com/400/200?random=6',
      creationDate: new Date('2018-05-13T04:21:21'),
      duration: 53,
      // tslint:disable-next-line:max-line-length
      description: 'Labore nisi Lorem ad commodo. Officia ullamco in est amet. Ad sit minim tempor et nostrud cupidatat voluptate. Enim commodo cillum elit mollit anim aute sunt ut in et sint. Nisi labore excepteur tempor Lorem laborum. Eiusmod ut ea magna duis occaecat id laborum exercitation reprehenderit labore laborum.\r\n',
      title: 'eu excepteur cillum nisi consectetur ex sint nisi est amet',
      topRated: false,
    },
  ];
}

describe('CourseListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPaginationComponent, TestHostComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create correct number of pagination buttons', () => {
    const coursesPaginationEl: DebugElement = fixture.debugElement.query(By.css('.pagination-container'));
    const numberOfButtons = coursesPaginationEl.nativeElement.children.length;
    const numberOfPages: number = Math.ceil(testHost.courses.length / Number(testHost.coursesPerPage));
    expect(numberOfButtons).toBe(numberOfPages + 2);  // first and last button
  });

  it('should create react to input param changes', () => {
    testHost.coursesPerPage = '2';
    fixture.detectChanges();
    const coursesPaginationEl: DebugElement = fixture.debugElement.query(By.css('.pagination-container'));
    const numberOfButtons = coursesPaginationEl.nativeElement.children.length;
    const numberOfPages: number = Math.ceil(testHost.courses.length / Number(testHost.coursesPerPage));
    expect(numberOfButtons).toBe(numberOfPages + 2);  // first and last button
  });
});
