import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import * as CoursesActions from './../../core/@Ngrx/courses/courses.actions';
import { AppState } from '../../core/@Ngrx';

import { Course } from '../../shared/models';

@Component({
  selector: 'app-course-list-item-header',
  templateUrl: './course-list-item-header.component.html',
  styleUrls: ['./course-list-item-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListItemHeaderComponent {
  @Input() course: Course;

  constructor(private store: Store<AppState>) { }

  onClickFavoriteBtn(): void {
    const updatedCourse = { ...this.course, isFavorite: !this.course.isFavorite };
    this.store.dispatch(new CoursesActions.UpdateCourse(updatedCourse));
  }
}
