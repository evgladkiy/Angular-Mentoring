import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list-toolbox',
  templateUrl: './course-list-toolbox.component.html',
  styleUrls: ['./course-list-toolbox.component.less']
})
export class CourseListToolboxComponent {
  public searchQuery = '';

  @Output() filtred = new EventEmitter<string>();

  constructor() { }

  onFilterBtnClick(): void {
    this.filtred.emit(this.searchQuery.toLowerCase());
  }
}

