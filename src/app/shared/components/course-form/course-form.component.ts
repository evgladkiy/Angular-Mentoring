import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import {
  AppState,
  getTrainers,
  getDifficultyOfCourses,
  getTypesOfCourses
} from '../../../core/@Ngrx';

import { Course, Trainer } from '../../models';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.less' ],
})
export class CourseFormComponent implements OnInit {
  public date: string;
  public typesOfCourse$: Observable<ReadonlyArray<string>>;
  public coursesDifficulty$: Observable<ReadonlyArray<string>>;
  public allTrainers$: Observable<ReadonlyArray<Trainer>>;
  constructor(private store: Store<AppState>) { }

  @Input() course?: Course;
  @Input() submitBtnText: string;
  @Output() submited = new EventEmitter<Course>();

  ngOnInit() {
    this.date = this.getDateForInput();
    this.allTrainers$ = this.store.select(getTrainers);
    this.typesOfCourse$ = this.store.select(getTypesOfCourses);
    this.coursesDifficulty$ = this.store.select(getDifficultyOfCourses);

    if (!this.course) {
      this.course = {
        _id: String(Math.random()),
        title: null,
        description: null,
        date: null,
        duration: 0,
        trainers: [],
        img: 'https://loremflickr.com/500/300?random=12',
        rating: 0,
        language: null,
        difficulty: null,
        type: null,
        isFavorite: false,
      };
    }
  }

  private getDateForInput(): string {
    const date: Date = this.course ? new Date(this.course.date) : new Date();
    const courseYear: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const courseDate: string = date.getDate() < 10 ? '0' + date.getDate() : String(date.getDate());
    const courseMonth: string = month < 10 ? '0' + month : String(month);

    return `${courseYear}-${courseMonth}-${courseDate}`;
  }

  onSubmit(): void {
    this.course.date = new Date(this.date);
    this.submited.emit(this.course);
  }

  onTagItValueChanged(trainers: Trainer[]): void {
    this.course.trainers = trainers;
  }
  onDropdownValueChanged(value: string, prop: string): void {
    this.course[prop] = value;
  }
}
