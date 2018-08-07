import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../shared/models';
import { CoursesService, ModalWindowService  } from '../shared/services';
import { CoursesFilterPipe } from './courses-filter.pipe';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.less'],
  providers: [ CoursesFilterPipe ],
})
export class CourseListPageComponent implements OnInit, OnDestroy {
  private modalWindowSub: Subscription;
  public courses: Course[];
  public courseToDelete: Course;
  public shouldShowModal: boolean;
  public coursesPerPage = 5;

  constructor(
    private coursesServise: CoursesService,
    private coursesFilterPipe: CoursesFilterPipe,
    private modalWindowService: ModalWindowService,
  ) { }

  ngOnInit(): void {
    this.courses = this.coursesServise.getCourses();
    this.modalWindowSub = this.modalWindowService.channel$.subscribe((id) => {
      this.shouldShowModal = Boolean(id);
      this.courseToDelete = this.shouldShowModal
        ? this.courses.find(course => course._id === id)
        : null;
    });
  }

  ngOnDestroy(): void {
    this.modalWindowSub.unsubscribe();
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

  onFiltredCourse(value: string): void {
    const allCourses = this.coursesServise.getCourses();

    this.courses = this.coursesFilterPipe.transform(allCourses, value);
  }
}