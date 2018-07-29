import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-list-item-body',
  templateUrl: './course-list-item-body.component.html',
  styleUrls: ['./course-list-item-body.component.less'],
})
export class CourseListItemBodyComponent {
  @Input() title: string;
  @Input() description: string;

  constructor() { }
}
