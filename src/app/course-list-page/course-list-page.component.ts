import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

import * as CoursesActions from '../core/@Ngrx/courses/courses.actions';
import { Store, select } from '@ngrx/store';
import { AppState, getCourseToDelete, getCourses, getCoursesError } from '../core/@Ngrx';

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
  private courseToDeleteSub: Subscription;
  private coursesSub: Subscription;
  public courseToDelete: Course;
  public courses: ReadonlyArray<Course>;
  public numberOfCourses: number;
  public coursesCount: number;
  public shouldShowModal: boolean;
  public coursesLoadingError$: Observable<Error | string>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private coursesService: CoursesService,
    private spinnerService: SpinnerService,
    private reqParamsService: ReqParamsService,
    // private modalWindowService: ModalWindowService,
  ) { }

  ngOnInit(): void {
    // console.log(this.store);
    // const { page, count, q } = this.reqParamsService.getParams();
    // this.spinnerService.showSpinner();
    // // this.coursesService.fetchCourses(page, count, q).subscribe(
    //   () => this.spinnerService.hideSpinner()
    // );
    // this.coursesState$ = this.store.pipe(select(getCoursesState));
    // this.store.pipe(select('courses')).subscribe(store => {
    //   console.log(store)
    //   this.coursesToDelete = store.courseToDelete;
    // });
    // this.courses$ = this.store.pipe(select(getCourses));
    this.coursesSub = this.store.pipe(select(getCourses)).subscribe(
      courses => this.courses = courses
    );
    this.courseToDeleteSub = this.store.pipe(select(getCourseToDelete)).subscribe(
      course => this.courseToDelete = course
    );
    this.coursesLoadingError$ = this.store.pipe(select(getCoursesError));
    this.store.dispatch(new CoursesActions.GetCourses());
    // this.coursesSub = this.coursesService.coursesChannel$.subscribe(
    //   courses => this.courses = courses
    // );
    // this.modalWindowSub = this.modalWindowService.channel$.subscribe((id) => {
    //   this.shouldShowModal = Boolean(id);
    //   this.courseToDelete = this.shouldShowModal
    //     ? this.courses.find(course => course._id === id)
    //     : null;
    // });
  }

  ngOnDestroy(): void {
    this.courseToDeleteSub.unsubscribe();
    this.coursesSub.unsubscribe();
  }

  onSubmitModal(): void {
    this.store.dispatch(new CoursesActions.DeleteCourse(this.courseToDelete._id));
    // const courseToDeleteId = this.courseToDelete._id;
    // this.spinnerService.showSpinner();
    // this.store.dispatch(new CoursesActions.DeleteCourse())

    // this.coursesService.deleteCourse(courseToDeleteId)
    //   .pipe(delay(300))
    //   .subscribe((res) => {
    //     if (res.status === 'OK') {
    //       const { count, q } = this.reqParamsService.getParams();
    //       let { page } = this.reqParamsService.getParams();

    //       if (this.courses.length === 1 && this.courses[0]._id === courseToDeleteId) {
    //         page = page - 1;
    //         this.router.navigate(['/courses'], { queryParams: { page, count, q } });
    //       }

    //       this.coursesService.fetchCourses(page, count, q).subscribe(
    //         () => this.spinnerService.hideSpinner()
    //       );
    //     } else {
    //       console.log(res.msg);
    //     }
    //     this.modalWindowService.closeModal();
    // });
  }

  onCloseModal(): void {
    this.store.dispatch(new CoursesActions.SetCourseToDelete(null));
  }
}
