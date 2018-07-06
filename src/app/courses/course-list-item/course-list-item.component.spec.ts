import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { CourseListItemComponent } from './course-list-item.component';

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
    duration: 267,
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
      declarations: [ CourseListItemComponent, TestHostComponent ],
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

  it('course header should be correct', () => {
    const h3DebugElement: DebugElement = courseEl.query(By.css('.course-info__header'));

    expect(h3DebugElement.nativeElement.textContent).toBe(testHost.course.title);
  });

  it('course description should be correct', () => {
    const pDebugElement: DebugElement = courseEl.query(By.css('.course-info__description'));

    expect(pDebugElement.nativeElement.textContent.trim()).toBe(testHost.course.description);
  });

  it('course author should be correct', () => {
    const courseAuthorDebugElement: DebugElement = courseEl.query(By.css('.course-author__txt'));
    expect(courseAuthorDebugElement.nativeElement.textContent).toContain(testHost.course.author);
  });

  it('course duration should be correct', () => {
    const courseDurationDebugElement: DebugElement = courseEl.query(By.css('.course-duration__txt'));

    expect(courseDurationDebugElement.nativeElement.textContent).toContain(testHost.course.duration);
  });

  it('should raise correct course id when clicked', () => {
    const deleteBtn = courseEl.query(By.css('.btn-delete'));

    deleteBtn.triggerEventHandler('click', null);

    expect(testHost.courseToDeleteId).toBe(testHost.course._id);
  });

});
