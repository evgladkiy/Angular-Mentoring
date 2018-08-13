import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Course, InfoRes } from '../../models';
import { CoursesRes } from '../../models/courses-res.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private serverUrl = 'http://localhost:3000/courses';
  private cachedCourses: Course[];
  private courses: Course[];
  private typesOfCourse: string[] = ['Training', 'Lecture', 'Video course', 'Seminar'];
  private coursesDifficulty: string[] = ['For All', 'Novice', 'Intermediate', 'Advanced', 'Expert'];

  private coursesChannel = new Subject<Course[]>();
  private numOfCourseshannel = new Subject<number>();
  public coursesChannel$ = this.coursesChannel.asObservable();
  public numOfCourseshannel$ = this.numOfCourseshannel.asObservable();
  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute) {}

  fetchCourses(page: number = 1, count: number = 5, q?: string) {
    let params = new HttpParams()
      .set('page', String(page))
      .set('count', String(count));
      if (q) {
        console.log(Boolean(q))
      params = new HttpParams()
        .set('page', String(page))
        .set('count', String(count))
        .set('q', q);
    }

    return this.http
      .get<CoursesRes>(this.serverUrl, { params })
      .subscribe((res) => {
        this.cachedCourses = res.courses;
        this.coursesChannel.next(res.courses);
        this.numOfCourseshannel.next(res.coursesCount);
      });
  }

  getCoursebyId(id: string): Promise<Course> {
    return this.http
      .get<Course>(`${this.serverUrl}/${id}`)
      .toPromise();
  }

  addCourse(newCourse: Course): void {
    this.courses = [ ... this.courses, newCourse ];
  }

  updateCourse(updatedProps: Partial<Course>): void {
    const updatedCourse = this.courses.find(course => course._id === updatedProps._id);

    this.courses = this.courses.filter(course => course._id !== updatedCourse._id);
    this.courses = [
      ...this.courses,
      { ...updatedCourse, ...updatedProps }
    ];
  }

  deleteCourse(id: string) {
    // const { page, count, q } = this.activatedRoute.snapshot.queryParams;
    return this.http
    .delete<InfoRes>(`${this.serverUrl}/${id}`)
    .subscribe((res) => {
      if (res.status === 'OK') {
        const { page, count, q} = this.activatedRoute.snapshot.queryParams;
         console.log(page, count, q);
          console.log()
          this.fetchCourses(page, count, q);
        } else {
          console.log(res.msg)
        }
      });
    // const courseToDelete = this.courses.find(course => course._id === id);

    // this.courses = this.courses.filter(course => course._id !== id);

    // return courseToDelete;
  }
  getTypesOfCourses(): string[] {
    return this.typesOfCourse;
  }

  getDifficultyOfCourses(): string[] {
    return this.coursesDifficulty;
  }
}
