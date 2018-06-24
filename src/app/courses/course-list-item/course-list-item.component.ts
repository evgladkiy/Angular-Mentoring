import { Component, OnInit, Input } from '@angular/core';

import { Course } from './../course.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.less']
})
export class CourseListItemComponent implements OnInit {
    @Input() course: Course;

    constructor() { }

    ngOnInit() {
      console.log(this.course)
    }

}
