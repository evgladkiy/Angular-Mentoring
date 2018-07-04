import { Component, Input, OnInit } from '@angular/core';

import { Course } from '../course.model';

@Component({
  selector: 'app-courses-pagination',
  templateUrl: './courses-pagination.component.html',
  styleUrls: ['./courses-pagination.component.less'],
})
export class CoursesPaginationComponent implements OnInit {
  public pages: string[];

  @Input() courses: Course[];
  @Input() itemsOnPage: string;

  constructor() {}

  ngOnInit() {
    const numberOfPages: number = Math.ceil(this.courses.length / Number(this.itemsOnPage));

    this.pages = Array(numberOfPages).fill(null).map((item, index) => String(index + 1));
    this.pages.unshift('first');
    this.pages.push('last');
  }

  onClickPaginationBtn(btn: string): void {
    console.log(`Pagination Btn ${btn} was clicked`);
  }

}