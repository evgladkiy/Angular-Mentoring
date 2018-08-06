import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseListPaginationService {
  private buttons = new Subject<number[]>();
  private numberOfPages = new Subject<number>();
  public buttonsChannel$ = this.buttons.asObservable();
  public numberOfPagesChannel$ = this.numberOfPages.asObservable();
  private maxButtonsAmoutn = 5;
  constructor() { }

  getButtons(numberOfItems: number, itemPerPage: number, activePage: number): void {
    const numberOfPages: number = Math.ceil(numberOfItems / itemPerPage);
    const numberOfButtons = numberOfPages <= this.maxButtonsAmoutn
      ? numberOfPages
      : this.maxButtonsAmoutn;
    const middleBtnNumber: number = Math.ceil(numberOfButtons / 2);
    const buttons = Array(numberOfButtons)
      .fill(null)
      .map((item, index) => {
        const buttonNumber = index + 1;

        if (activePage <= 3) {
          return buttonNumber;
        } else if (numberOfPages - middleBtnNumber < activePage) {
          return numberOfPages + buttonNumber - this.maxButtonsAmoutn;
        } else {
          return activePage + buttonNumber - middleBtnNumber;
        }
      });

    this.numberOfPages.next(numberOfPages);
    this.buttons.next(buttons);
  }
}
