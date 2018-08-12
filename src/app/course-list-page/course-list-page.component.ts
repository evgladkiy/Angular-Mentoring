import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../shared/models';
import { CoursesService, ModalWindowService  } from '../shared/services';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.less'],
})
export class CourseListPageComponent implements OnInit, OnDestroy {
  private defaultCoursesPerPage = 5;
  private modalWindowSub: Subscription;
  private coursesSub: Subscription;
  private numOfCoursesSub: Subscription;
  public courses: Course[];
  public numberOfCourses: number;
  public courseToDelete: Course;
  public shouldShowModal: boolean;
  public coursesPerPage: number;

  constructor(
    private coursesServise: CoursesService,
    private route: ActivatedRoute,
    private modalWindowService: ModalWindowService,
  ) { }

  ngOnInit(): void {
    const { page, count = this.defaultCoursesPerPage, q} = this.route.snapshot.queryParams;

    this.coursesPerPage = Number(count);
    this.coursesServise.fetchCourses(page, count, q);
    this.coursesSub = this.coursesServise.coursesChannel$.subscribe(
      courses =>  this.courses = courses
    );
    this.numOfCoursesSub = this.coursesServise.numOfCourseshannel$.subscribe(
      numOfCourses => this.numberOfCourses = Number(numOfCourses)
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
    this.numOfCoursesSub.unsubscribe();
    this.coursesSub.unsubscribe();
  }

  onSubmitModal(): void {
    const courseToDeleteId = this.courseToDelete._id;

    this.courses = this.courses.filter(course => course._id !== courseToDeleteId);
    this.coursesServise.deleteCourse(courseToDeleteId);
    this.modalWindowService.closeModal();
  }

  onCloseModal(): void {
    this.modalWindowService.closeModal();
  }
}
