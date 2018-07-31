import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../../shared/models';

import { CoursesService, ModalWindowService, AuthService  } from '../../shared/services';

import { CoursesFilterPipe } from './courses-filter.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
  providers: [ CoursesFilterPipe ],
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public courses: Course[];
  public courseToDelete: Course;
  public shouldShowModal: boolean;

  constructor(
    private router: Router,
    private coursesServise: CoursesService,
    private authServise: AuthService,
    private coursesFilterPipe: CoursesFilterPipe,
    private modalWindowService: ModalWindowService,
  ) { }

  ngOnInit(): void {
    if (!this.authServise.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.courses = [...this.coursesServise.getCourses()];
      this.sub = this.modalWindowService.channel$.subscribe((id) => {
        this.shouldShowModal = Boolean(id);
        this.courseToDelete = this.shouldShowModal
          ? this.courses.find(course => course._id === id)
          : null;
      });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
