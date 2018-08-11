import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CourseListItemComponent } from './course-list-item.component';
import { CapitalizedPipe, DurationPipe } from '../../shared/pipes';

// test host approach

@Component({
  template: `
  <app-course-list-item
    [course]='course'(deleted)="onDeleteCourse($event)">
  </app-course-list-item>`
})
class TestHostComponent {
  course = {
    _id: '5b2fe37c5599f0d880855dde',
    author: 'Juliette Cochran',
    img: 'https://loremflickr.com/400/200?random=2',
    creationDate: new Date('2018-05-25T09:59:24'),
    duration: 30,
    // tslint:disable-next-line:max-line-length
    description: 'Amet amet proident duis deserunt in occaecat. Ullamco culpa elit sit culpa ullamco magna fugiat non tempor eu magna. Duis amet anim cillum nostrud voluptate incididunt. Proident nostrud sint aute fugiat ex.',
    title: 'Consequat minim fugiat magna esse magna ipsum mollit sint',
  };
  courseToDeleteId: string;
  onDeleteCourse(id: string): void { this.courseToDeleteId = id; }
}

describe('CourseListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let courseEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListItemComponent,
        TestHostComponent,
        CapitalizedPipe,
        DurationPipe,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    courseEl = fixture.debugElement.query(By.css('.course-container'));
    fixture.detectChanges();
  });

  it('img src attr should have correct path', () => {
    const imgDebugElement: DebugElement = courseEl.query(By.css('img'));

    expect(imgDebugElement.nativeElement.src).toBe(testHost.course.img);
  });

});
