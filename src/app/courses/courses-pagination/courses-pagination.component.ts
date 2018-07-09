import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Course } from '../course.model';

@Component({
  selector: 'app-courses-pagination',
  templateUrl: './courses-pagination.component.html',
  styleUrls: ['./courses-pagination.component.less'],
})
export class CoursesPaginationComponent implements OnInit, OnChanges {
  public pages: string[];

  @Input() courses: Course[];
  @Input('courses-per-page') coursesPerPage: string;

  constructor() {}

  ngOnInit(): void {
    this.updateButtons(this.courses, this.coursesPerPage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const courses: Course[] = changes.courses ? changes.courses.currentValue : this.courses;
    const coursesPerPage: string = changes.coursesPerPage ? changes.coursesPerPage.currentValue : this.coursesPerPage;

    this.updateButtons(this.courses, this.coursesPerPage);
  }

  private updateButtons(courses: Course[], coursesPerPage: string): void {
    const numberOfPages: number = Math.ceil(courses.length / Number(coursesPerPage));

    this.pages = Array(numberOfPages).fill(null).map((item, index) => String(index + 1));
    this.pages.unshift('first');
    this.pages.push('last');
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
