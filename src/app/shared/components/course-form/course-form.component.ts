import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { dateValidator, integerValidator, dropListValidator, tagItValidator } from './../../../core/validators';
import { Store } from '@ngrx/store';
import {
  AppState,
  getTrainers,
  getDifficultyOfCourses,
  getTypesOfCourses
} from '../../../core/@Ngrx';

import { Course, Trainer } from '../../models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.less' ],
})
export class CourseFormComponent implements OnInit {
  public courseForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    img: new FormControl('https://loremflickr.com/500/300?random=12', [Validators.required]),
    date: new FormControl(this.getDateForInput(), [Validators.required, dateValidator]),
    difficulty: new FormControl('Select difficulty', [dropListValidator]),
    type: new FormControl('Select type', [dropListValidator]),
    trainers: new FormControl([], [tagItValidator]),
    duration: new FormControl('', [Validators.required, integerValidator, Validators.max(900)]),
    language: new FormControl('', [Validators.required, Validators.minLength(2)]),
    rating: new FormControl(0, [Validators.required, Validators.max(100), Validators.min(0)]),
    isFavorite: new FormControl(false),
  });

  public typesOfCourse$: Observable<ReadonlyArray<string>>;
  public coursesDifficulty$: Observable<ReadonlyArray<string>>;
  public allTrainers$: Observable<ReadonlyArray<Trainer>>;
  public courseToUpdateId = String(Math.random());

  constructor(private store: Store<AppState>) { }

  @Input() course?: Course;
  @Input() submitBtnText: string;
  @Output() submited = new EventEmitter<Course>();

  ngOnInit() {
    this.allTrainers$ = this.store.select(getTrainers);
    this.typesOfCourse$ = this.store.select(getTypesOfCourses);
    this.coursesDifficulty$ = this.store.select(getDifficultyOfCourses);

    if (this.course) {
      this.courseForm.setValue({
        title: this.course.title,
        description: this.course.description,
        img: this.course.img,
        date: this.getDateForInput(new Date(this.course.date)),
        duration: this.course.duration,
        difficulty: this.course.difficulty,
        trainers: this.course.trainers,
        type: this.course.type,
        language: this.course.language,
        rating: this.course.rating,
        isFavorite: this.course.isFavorite,
      });
    }
  }

  private getDateForInput(date = new Date()): string {
    const courseYear: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const courseDate: string = date.getDate() < 10 ? '0' + date.getDate() : String(date.getDate());
    const courseMonth: string = month < 10 ? '0' + month : String(month);

    return `${courseDate}/${courseMonth}/${courseYear}`;
  }

  private getDateForCoure(date: string): Date {
    const dateArr = date.split('/');
    const courseDate: number = Number(dateArr[0]);
    const courseMonth: number = Number(dateArr[1]);
    const courseYear: number = Number(dateArr[2]);

    return new Date(courseYear, courseMonth - 1, courseDate);
  }

  onSubmit(): void {
    const { value: course } = this.courseForm;
    const courseId = this.course ? this.course._id : String(Math.random());

    course.date = this.getDateForCoure(course.date);
    course._id = courseId;

    this.submited.emit(course);
  }
}
