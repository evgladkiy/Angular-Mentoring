import { Component, Input } from '@angular/core';

import { Course } from '../../shared/models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.less' ],
})
export class CourseListComponent {
  public coursesPerPage = 5;

  @Input() courses: Course[];

  constructor() { }

}
