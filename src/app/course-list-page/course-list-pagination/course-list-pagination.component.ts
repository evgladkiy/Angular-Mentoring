import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState, getPagination, getPaginationCoursesPerPage, getRouterState } from '../../core/@Ngrx';
import * as CoursesActions from './../../core/@Ngrx/courses/courses.actions';

@Component({
  selector: 'app-course-list-pagination',
  templateUrl: './course-list-pagination.component.html',
  styleUrls: ['./course-list-pagination.component.less']
})
export class CourseListPaginationComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private coursesPerPage: number;
  public activePage: number;
  public buttons: ReadonlyArray<number>;
  public numberOfPages: number;
  public numberOfCourses: number;
  public shownCourses: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.pipe(select(getPaginationCoursesPerPage)).subscribe((
      coursesPerPage => this.coursesPerPage = coursesPerPage
    )).unsubscribe();

    this.store.pipe(select(getRouterState)).subscribe((
      { state: { queryParams: { page = 1 } } }) =>
        this.store.dispatch(new CoursesActions.UpdatePaginationButtons(Number(page)))
    ).unsubscribe();

    this.sub = this.store.pipe(select(getPagination)).subscribe(({
      buttons, activePage, coursesCount, numberOfPages
    }) => {
      this.buttons = buttons;
      this.activePage = activePage;
      this.numberOfCourses = coursesCount;
      this.numberOfPages = numberOfPages;
      this.updateShownCourses();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onClickPaginationBtn(btn: number): void {
    if (this.activePage !== btn) {
      this.store.dispatch(new CoursesActions.PaginationButtonClick(btn));
    }
  }

  updateShownCourses(): void {
    const lastShownCourse = this.coursesPerPage * this.activePage;
    const firstShownCourse = lastShownCourse - this.coursesPerPage + 1;

    if (firstShownCourse ===  this.numberOfCourses) {
      this.shownCourses = String(this.numberOfCourses);
    } else {
      this.shownCourses = `${firstShownCourse} - ${this.numberOfCourses >= lastShownCourse
        ? lastShownCourse
        : this.numberOfCourses}`;
    }
  }
}
