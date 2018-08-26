import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ModalWindowService } from '../../shared/services';
import * as CoursesActions from '../../core/@Ngrx/courses/courses.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/@Ngrx';
import { Course } from '../../shared/models';
@Component({
  selector: 'app-course-list-item-body',
  templateUrl: './course-list-item-body.component.html',
  styleUrls: ['./course-list-item-body.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListItemBodyComponent {
  @Input() course: Course;
  constructor(private store: Store<AppState>,
              private modalWindowService: ModalWindowService) { }

  onClick(id: string): void {
    this.store.dispatch(new CoursesActions.SetCourseToDelete(this.course));
    // this.modalWindowService.showModalByCourseId(id);
  }
}
