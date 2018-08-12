import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { CourseListPaginationService } from './course-list-pagination.service';

@Component({
  selector: 'app-course-list-pagination',
  templateUrl: './course-list-pagination.component.html',
  styleUrls: ['./course-list-pagination.component.less']
})
export class CourseListPaginationComponent implements OnInit, OnChanges, OnDestroy {
  @Input() numberOfCourses: number;
  @Input() coursesPerPage: number;

  private buttonsSub: Subscription;
  public buttons: number[];
  public numberOfPages: number;
  public activePage = 1;
  public numberOfShownCourses: number;

  constructor(private route: ActivatedRoute,
              private paginationService: CourseListPaginationService) {}

  ngOnInit(): void {
    this.buttonsSub = this.paginationService.buttonsChannel$.subscribe(
      buttons => this.buttons = buttons
    );

    this.updateButtons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.numberOfPages = Math.ceil(this.numberOfCourses / this.coursesPerPage);
    this.activePage = Number(this.route.snapshot.queryParams['page']) || this.activePage;
    this.updateNumOfShownCourses();
    this.updateButtons();
  }

  ngOnDestroy(): void {
    this.buttonsSub.unsubscribe();
  }

  private updateButtons(): void {
    this.paginationService.getButtons(this.numberOfPages, this.activePage);
  }

  onClickPaginationBtn(btn: number): void {
    this.activePage = btn;
    this.paginationService.fetchCourses(
      this.activePage,
      this.coursesPerPage,
      this.route.snapshot.queryParams['q']);
    this.updateNumOfShownCourses();
    this.updateButtons();
  }

  updateNumOfShownCourses(): void {
    this.numberOfShownCourses = this.numberOfCourses >= this.coursesPerPage * this.activePage
      ? this.coursesPerPage
      : this.coursesPerPage - (this.coursesPerPage * this.activePage - this.numberOfCourses);
  }
}
