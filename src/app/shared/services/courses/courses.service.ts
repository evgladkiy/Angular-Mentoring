import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Course, InfoRes, ReqParams } from '../../models';
import { CoursesRes } from '../../models/courses-res.model';
import { ReqParamsService } from '../req-params/req-params.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private serverUrl = 'http://localhost:3000/courses';
  private typesOfCourse: string[] = ['Training', 'Lecture', 'Video course', 'Seminar'];
  private coursesDifficulty: string[] = ['For All', 'Novice', 'Intermediate', 'Advanced', 'Expert'];
  private defaultParams: ReqParams;
  private coursesChannel = new BehaviorSubject<Course[]>([]);
  private numOfCoursesChannel = new BehaviorSubject<number>(null);
  public coursesChannel$ = this.coursesChannel.asObservable();
  public numOfCoursesChannel$ = this.numOfCoursesChannel.asObservable();
  constructor(private http: HttpClient,
              private reqParamsService: ReqParamsService) {
    this.defaultParams = this.reqParamsService.getDefaultParams();
  }

  fetchCourses(
    page: number = this.defaultParams.page,
    count: number = this.defaultParams.count,
    q?: string): void {
      let params = new HttpParams()
        .set('page', String(page))
        .set('count', String(count));

      if (q) {
        params = new HttpParams()
          .set('page', String(page))
          .set('count', String(count))
          .set('q', q);
      }

      this.http
        .get<CoursesRes>(this.serverUrl, { params })
        .subscribe((res) => {
          this.coursesChannel.next(res.courses);
          this.numOfCoursesChannel.next(res.coursesCount);
        });
  }

  getCoursebyId(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.serverUrl}/${id}`);
  }

  addCourse(newCourse: Course): void {
    this.http
      .post<InfoRes>(`${this.serverUrl}`, newCourse )
      .subscribe((res) => {
        if (res.status !== 'OK') {
          console.log(res.msg);
        }
      });
  }

  updateCourse(course: Course): void {
    this.http
      .post<InfoRes>(`${this.serverUrl}/${course._id}`, course )
      .subscribe((res) => {
        if (res.status !== 'OK') {
          console.log(res.msg);
        }
      });
  }

  deleteCourse(id: string, isLastCourse: boolean): void {
    this.http
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
