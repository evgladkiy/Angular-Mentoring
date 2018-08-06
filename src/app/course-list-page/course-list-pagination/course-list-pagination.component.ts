import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseListPaginationService } from './course-list-pagination.service';

@Component({
  selector: 'app-course-list-pagination',
  templateUrl: './course-list-pagination.component.html',
  styleUrls: ['./course-list-pagination.component.less']
})
export class CourseListPaginationComponent implements OnInit, OnChanges, OnDestroy {
  private buttonsSub: Subscription;
  private numberOfPagesSub: Subscription;
  public buttons: number[];
  public numberOfPages: number;
  public coursesPerPage = 5;
  public activePage = 1;

  @Input() numberOfCourses: number;

  constructor(private paginationService: CourseListPaginationService) {}

  ngOnInit(): void {
    this.buttonsSub = this.paginationService.buttonsChannel$.subscribe(
      buttons => this.buttons = buttons
    );
    this.numberOfPagesSub = this.paginationService.numberOfPagesChannel$.subscribe((numOfPages) => {
      this.numberOfPages = numOfPages;

      if (this.activePage > numOfPages) {
        this.activePage = numOfPages;
      }

    });
    this.updateButtons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateButtons();
  }

  ngOnDestroy(): void {
    this.buttonsSub.unsubscribe();
  }

  private updateButtons(): void {
    this.paginationService.getButtons(this.numberOfCourses, this.coursesPerPage, this.activePage);
  }

  onClickPaginationBtn(btn: number): void {
    this.activePage = btn;
    this.updateButtons();
  }

  // getShownCourses(): string {
    // return this.numberOfCourses <= this.coursesPerPage * this.activePage
    //   ? this.numberOfCourses
    //   : this.coursesPerPage * this.activePage
  // }
}
