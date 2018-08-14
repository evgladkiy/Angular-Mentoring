import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseListPaginationService } from './course-list-pagination.service';
import { ReqParamsService } from '../../shared/services';

@Component({
  selector: 'app-course-list-pagination',
  templateUrl: './course-list-pagination.component.html',
  styleUrls: ['./course-list-pagination.component.less']
})
export class CourseListPaginationComponent implements OnInit, OnChanges, OnDestroy {
  @Input() numberOfCourses: number;

  private buttonsSub: Subscription;
  public buttons: number[];
  public coursesPerPage: number;
  public numberOfPages: number;
  public activePage: number;
  public shownCourses: string;

  constructor(private reqParamsService: ReqParamsService,
              private paginationService: CourseListPaginationService) {
    const { page, count } = this.reqParamsService.getParams();
    this.coursesPerPage = count;
    this.activePage = page;
  }

  ngOnInit(): void {
    this.buttonsSub = this.paginationService.buttonsChannel$.subscribe(
      buttons => this.buttons = buttons
    );

    this.updateButtons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.numberOfPages = Math.ceil(this.numberOfCourses / this.coursesPerPage);
    this.activePage = this.reqParamsService.getParams()['page'] || this.activePage;
    this.updateShownCourses();
    this.updateButtons();
  }

  ngOnDestroy(): void {
    this.buttonsSub.unsubscribe();
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
