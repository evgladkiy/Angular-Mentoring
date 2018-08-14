import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Course } from '../shared/models';
import { CoursesService, ModalWindowService, ReqParamsService  } from '../shared/services';

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
  public courseToDelete: Course;
  public shouldShowModal: boolean;

  constructor(
    private coursesServise: CoursesService,
    private router: Router,
    private modalWindowService: ModalWindowService,
    private reqParamsService: ReqParamsService,
  ) { }

  ngOnInit(): void {
    const { page, count, q } = this.reqParamsService.getParams();

    this.coursesServise.fetchCourses(page, count, q);
    this.coursesSub = this.coursesServise.coursesChannel$.subscribe(
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
    let isLastCourse = false;

    if (this.courses.length === 1 && this.courses[0]._id === courseToDeleteId) {
      const { page, count, q } = this.reqParamsService.getParams();

      this.router.navigate(['/courses'], { queryParams: { page: page - 1, count, q } });
      isLastCourse = true;
    }

    this.coursesServise.deleteCourse(courseToDeleteId, isLastCourse);
    this.modalWindowService.closeModal();
  }

  onCloseModal(): void {
    this.modalWindowService.closeModal();
  }
}
