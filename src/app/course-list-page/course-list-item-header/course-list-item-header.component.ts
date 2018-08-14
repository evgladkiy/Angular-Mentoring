import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { CoursesService } from '../../shared/services';
import { Course } from '../../shared/models';

@Component({
  selector: 'app-course-list-item-header',
  templateUrl: './course-list-item-header.component.html',
  styleUrls: ['./course-list-item-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListItemHeaderComponent {
  @Input() course: Course;

  constructor(private coursesService: CoursesService) { }

  onClickFavoriteBtn(): void {
    this.course = {
      ...this.course,
      isFavorite: !this.course.isFavorite
    };
    this.coursesService.updateCourse(this.course);
  }
}
