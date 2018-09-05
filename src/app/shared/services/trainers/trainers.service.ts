import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trainer } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  private serverUrl = 'http://localhost:3000/trainers';
  constructor(private http: HttpClient) { }

  fetchCourses(): Observable<Partial<Trainer[]>> {
      return this.http.get<Partial<Trainer[]>>(this.serverUrl);
  }

}
