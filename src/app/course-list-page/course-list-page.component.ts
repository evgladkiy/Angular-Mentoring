import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Course } from '../shared/models';
import { CoursesService, ModalWindowService, ReqParamsService  } from '../shared/services';
import { delay } from 'rxjs/operators';
import { SpinnerService } from '../core/components/spinner/spinner.service';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.less'],
})
export class CourseListPageComponent implements OnInit, OnDestroy {
  private modalWindowSub: Subscription;
  private coursesSub: Subscription;
  public courses: Course[];
  public numberOfCourses: number;
  public coursesCount: number;
  public courseToDelete: Course;
  public shouldShowModal: boolean;

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private spinnerService: SpinnerService,
    private reqParamsService: ReqParamsService,
    private modalWindowService: ModalWindowService,
  ) { }

  ngOnInit(): void {
    const { page, count, q } = this.reqParamsService.getParams();
    this.spinnerService.showSpinner();
    this.coursesService.fetchCourses(page, count, q).subscribe(
      () => this.spinnerService.hideSpinner()
    );
    this.coursesSub = this.coursesService.coursesChannel$.subscribe(
      courses => this.courses = courses
    );
    this.modalWindowSub = this.modalWindowService.channel$.subscribe((id) => {
      this.shouldShowModal = Boolean(id);
      this.courseToDelete = this.shouldShowModal
        ? this.courses.find(course => course._id === id)
        : null;
    });
  }

  ngOnDestroy(): void {
    this.modalWindowSub.unsubscribe();
    this.coursesSub.unsubscribe();
  }

  onSubmitModal(): void {
    const courseToDeleteId = this.courseToDelete._id;
    this.spinnerService.showSpinner();

    this.coursesService.deleteCourse(courseToDeleteId)
      .pipe(delay(300))
      .subscribe((res) => {
        if (res.status === 'OK') {
          const { count, q } = this.reqParamsService.getParams();
          let { page } = this.reqParamsService.getParams();

          if (this.courses.length === 1 && this.courses[0]._id === courseToDeleteId) {
            page = page - 1;
            this.router.navigate(['/courses'], { queryParams: { page, count, q } });
          }

          this.coursesService.fetchCourses(page, count, q).subscribe(
            () => this.spinnerService.hideSpinner()
          );
        } else {
          console.log(res.msg);
        }
        this.modalWindowService.closeModal();
    });
  }

  onCloseModal(): void {
    this.modalWindowService.closeModal();
  }
}
