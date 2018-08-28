import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseListPaginationService } from './course-list-pagination.service';
import { ReqParamsService, CoursesService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, getCoursesCount } from '../../core/@Ngrx';

@Component({
  selector: 'app-course-list-pagination',
  templateUrl: './course-list-pagination.component.html',
  styleUrls: ['./course-list-pagination.component.less']
})
export class CourseListPaginationComponent implements OnInit, OnDestroy {
  private buttonsSub: Subscription;
  private paramsSub: Subscription;
  private numOfCoursesSub: Subscription;
  private buttons: number[];
  private activePage: number;
  private coursesPerPage: number;
  private numberOfPages: number;
  private defaultCoursesPerPage: number;
  private defaultActivePage: number;
  public numberOfCourses: number;
  public shownCourses: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private store: Store<AppState>,
    private reqParamsService: ReqParamsService,
    private paginationService: CourseListPaginationService,
  ) {
    const { page, count } = this.reqParamsService.getParams();
    this.defaultCoursesPerPage = count;
    this.defaultActivePage = page;
  }

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.queryParams.subscribe((params) => {
      this.activePage = +params['page'] || this.defaultActivePage;
      this.coursesPerPage = +params['count'] || this.defaultCoursesPerPage;
    });
    this.buttonsSub = this.paginationService.buttonsChannel$.subscribe(
      buttons => this.buttons = buttons
    );

    this.numOfCoursesSub = this.store.pipe(select(getCoursesCount)).subscribe(numOfCourses => {
      this.numberOfCourses = Number(numOfCourses);
      this.numberOfPages = Math.ceil(this.numberOfCourses / this.coursesPerPage);
      this.updateShownCourses();
      this.updateButtons();
    });
  }

  ngOnDestroy(): void {
    this.buttonsSub.unsubscribe();
    this.paramsSub.unsubscribe();
    this.numOfCoursesSub.unsubscribe();
  }

  private updateButtons(): void {
    this.paginationService.getButtons(this.numberOfPages, this.activePage);
  }

  onClickPaginationBtn(btn: number): void {
    if (this.activePage !== btn) {
      this.activePage = btn;
      this.paginationService.fetchCourses(
        this.activePage,
        this.coursesPerPage,
        this.reqParamsService.getParams()['q']);
      this.updateShownCourses();
      this.updateButtons();
    }
  }

  updateShownCourses(): void {
    const lastShownCourse = this.coursesPerPage * this.activePage;
    const firstShownCourse = lastShownCourse - this.coursesPerPage + 1;

    if (firstShownCourse ===  this.numberOfCourses) {
      this.shownCourses = String(this.numberOfCourses);
    } else {
      this.shownCourses = `${firstShownCourse} -${this.numberOfCourses >= lastShownCourse
        ? lastShownCourse
        : this.numberOfCourses}`;
    }
  }
}
