import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Course, InfoRes, ReqParams } from '../../models';
import { CoursesRes } from '../../models/courses-res.model';
import { ReqParamsService } from '../req-params/req-params.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private serverUrl = 'http://localhost:3000/courses';
  private cachedCourses: Course[];
  private courses: Course[];
  private typesOfCourse: string[] = ['Training', 'Lecture', 'Video course', 'Seminar'];
  private coursesDifficulty: string[] = ['For All', 'Novice', 'Intermediate', 'Advanced', 'Expert'];
  private defaultParams: ReqParams;
  private coursesChannel = new Subject<Course[]>();
  private numOfCoursesChannel = new Subject<number>();
  public coursesChannel$ = this.coursesChannel.asObservable();
  public numOfCoursesChannel$ = this.numOfCoursesChannel.asObservable();
  constructor(private http: HttpClient,
              private reqParamsService: ReqParamsService) {
    this.defaultParams = this.reqParamsService.getDefaultParams();
  }

  fetchCourses(
    page: number = this.defaultParams.page,
    count: number = this.defaultParams.count,
    q?: string) {
      let params = new HttpParams()
        .set('page', String(page))
        .set('count', String(count));

      if (q) {
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
          this.numOfCoursesChannel.next(res.coursesCount);
        });
  }

  getCoursebyId(id: string): Promise<Course> {
    return this.http
      .get<Course>(`${this.serverUrl}/${id}`)
      .toPromise();
  }

  addCourse(newCourse: Course) {
    return this.http
      .post<InfoRes>(`${this.serverUrl}`, newCourse )
      .subscribe((res) => {
        if (res.status !== 'OK') {
          console.log(res.msg);
        }
      });
  }

  updateCourse(updatedProps: Partial<Course>): void {
    const updatedCourse = this.courses.find(course => course._id === updatedProps._id);

    this.courses = this.courses.filter(course => course._id !== updatedCourse._id);
    this.courses = [
      ...this.courses,
      { ...updatedCourse, ...updatedProps }
    ];
  }

  deleteCourse(id: string, isLastCourse: boolean) {
    return this.http
    .delete<InfoRes>(`${this.serverUrl}/${id}`)
    .subscribe((res) => {
      if (res.status === 'OK') {
        const{ count, q } = this.reqParamsService.getParams();
        let { page } = this.reqParamsService.getParams();

        if (isLastCourse) {
          page -= 1;
        }
        this.fetchCourses(page, count, q);
      } else {
        console.log(res.msg);
      }
    });
  }

  getTypesOfCourses(): string[] {
    return this.typesOfCourse;
  }

  getDifficultyOfCourses(): string[] {
    return this.coursesDifficulty;
  }
}
