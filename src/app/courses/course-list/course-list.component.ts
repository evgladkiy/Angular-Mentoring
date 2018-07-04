import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Course } from './../course.model';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less'],
})
export class CourseListComponent {
    @Input() courses: Course[];
    @Output() deleted = new EventEmitter<string>();

    constructor() { }

    onDeleteCourse(id: string): void {
      this.deleted.emit(id);
    }
}
