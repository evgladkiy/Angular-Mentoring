import {Component, Input, OnInit} from '@angular/core';

import { Course } from './../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less'],
})
export class CourseListComponent {
    @Input() courses: Course[];

    constructor() { }
    OnInit() {
        console.log(this.courses)
    }
}
