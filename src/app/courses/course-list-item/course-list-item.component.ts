import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from './../course.model';

@Component({
    selector: 'app-course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.less']
})
export class CourseListItemComponent {
    @Input() course: Course;
    @Output() deleted = new EventEmitter<string>();

    constructor() { }

    onClick(id: string): void {
      this.deleted.emit(id);
    }
}
