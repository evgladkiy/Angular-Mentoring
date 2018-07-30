import { Component, Input } from '@angular/core';
import { CoursesService } from '../../shared/services';
import { Course } from '../../shared/models';

@Component({
  selector: 'app-course-list-item-header',
  templateUrl: './course-list-item-header.component.html',
  styleUrls: ['./course-list-item-header.component.less'],
})
export class CourseListItemHeaderComponent {
  @Input() language: string;
  @Input() difficulty: string;
  @Input() type: string;
  @Input() isFavorite: boolean;
  @Input() id: string;

  constructor(private coursesService: CoursesService) { }

  onClickFavoriteBtn(): void {
    this.isFavorite = !this.isFavorite;
    this.coursesService.updateCourse({
      _id: this.id,
      isFavorite: this.isFavorite,
    });
  }
}
