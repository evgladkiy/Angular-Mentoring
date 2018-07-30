import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../shared/models';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: [ './course-list-item.component.less' ],
})
export class CourseListItemComponent {
  @Input() course: Course;

  constructor() { }
}
