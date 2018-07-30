import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Course } from '../../shared/models';

@Component({
  selector: 'app-courses-pagination',
  templateUrl: './courses-pagination.component.html',
  styleUrls: [ './courses-pagination.component.less' ],
})
export class CoursesPaginationComponent implements OnChanges {
  public pages: number[];
  public buttons = [1, 2, 3, 4, 5];

  @Input() courses: Course[];
  @Input() coursesPerPage: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const courses: Course[] = changes.courses ? changes.courses.currentValue : this.courses;
    const coursesPerPage: string = changes.coursesPerPage ? changes.coursesPerPage.currentValue : this.coursesPerPage;

    this.updateButtons(this.courses, this.coursesPerPage);
  }

  private updateButtons(courses: Course[], coursesPerPage: string): void {
    const numberOfPages: number = Math.ceil(courses.length / Number(coursesPerPage));
    this.pages = this.buttons;
    // this.pages = Array(5).fill(null).map((item, index) => String(index + 1));
  }

  onClickPaginationBtn(btn: string): void {
    console.log(`Pagination Btn ${btn} was clicked`);
  }

  getShownPages(): string {
    return this.courses.length <= Number(this.coursesPerPage)
      ? String(this.courses.length)
      : this.coursesPerPage;
  }
}
