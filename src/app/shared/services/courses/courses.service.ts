import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Course, InfoRes } from '../../models';
import { CoursesRes } from '../../models/courses-res.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private serverUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  fetchCourses(page: number, count: number, q: string): Observable<CoursesRes> {
    let params = new HttpParams()
      .set('page', String(page))
      .set('count', String(count));

      if (q) {
        params = new HttpParams()
          .set('page', String(page))
          .set('count', String(count))
          .set('q', q);
      }

      return this
        .http.get<CoursesRes>(this.serverUrl, { params })
        .pipe(delay(500));
  }

  getCoursebyId(id: string): Observable<Course> {
    return this
      .http.get<Course>(`${this.serverUrl}/${id}`)
      .pipe(delay(500));
  }

  addCourse(newCourse: Course): Observable<InfoRes> {
    return this.http
      .post<InfoRes>(`${this.serverUrl}`, newCourse);
  }

  updateCourse(course: Course): Observable<InfoRes> {
    return this.http
      .post<InfoRes>(`${this.serverUrl}/${course._id}`, course);
  }

  deleteCourse(id: string): Observable<InfoRes> {
    return this.http
      .delete<InfoRes>(`${this.serverUrl}/${id}`);
  }
}
