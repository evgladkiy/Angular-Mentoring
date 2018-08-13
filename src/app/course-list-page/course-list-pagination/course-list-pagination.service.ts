import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { CoursesService } from '../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class CourseListPaginationService {
  private maxButtonsAmoutn = 5;
  private buttons = new Subject<number[]>();
  public buttonsChannel$ = this.buttons.asObservable();

  constructor(private router: Router,
              private coursesService: CoursesService) { }

  getButtons(numberOfPages: number, activePage: number): void {
    const numberOfButtons = numberOfPages <= this.maxButtonsAmoutn
      ? numberOfPages
      : this.maxButtonsAmoutn;
    const middleBtnNumber: number = Math.ceil(numberOfButtons / 2);
    const buttons = Array(numberOfButtons)
      .fill(null)
      .map((item, index) => {
        const buttonNumber = index + 1;
        if (activePage <= 3 || (numberOfPages <= this.maxButtonsAmoutn ))  {
          return buttonNumber;
        } else if (numberOfPages - middleBtnNumber < activePage) {
          return numberOfPages + buttonNumber - this.maxButtonsAmoutn;
        } else {
          return activePage + buttonNumber - middleBtnNumber;
        }
      });

    this.buttons.next(buttons);
  }

  fetchCourses(page: number, itemsPerPage: number, q: string) {
    const count = itemsPerPage;
    this.router.navigate(['/courses'], { queryParams: { page, count, q } });
    this.coursesService.fetchCourses(page, itemsPerPage, q);
  }
}
