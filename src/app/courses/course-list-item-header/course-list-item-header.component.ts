import { Component, Input } from '@angular/core';

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

  constructor() { }

}
