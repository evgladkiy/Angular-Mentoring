import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseListItemBodyComponent } from './course-list-item-body.component';
import { CapitalizedPipe } from '../../shared/pipes';

describe('CourseListItemBodyComponent', () => {
  let component: CourseListItemBodyComponent;
  let fixture: ComponentFixture<CourseListItemBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ CourseListItemBodyComponent, CapitalizedPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
