import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
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
export class CourseFormComponent implements OnInit, OnChanges {
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
  // public date: string;
  public typesOfCourse$: Observable<ReadonlyArray<string>>;
  public coursesDifficulty$: Observable<ReadonlyArray<string>>;
  public allTrainers$: Observable<ReadonlyArray<Trainer>>;
  constructor(private store: Store<AppState>) { }

  @Input() course?: Course;
  @Input() submitBtnText: string;
  @Output() submited = new EventEmitter<Course>();

  ngOnInit() {
    this.allTrainers$ = this.store.select(getTrainers);
    this.typesOfCourse$ = this.store.select(getTypesOfCourses);
    this.coursesDifficulty$ = this.store.select(getDifficultyOfCourses);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.course && changes.course.currentValue) {
      const course: Course = changes.course.currentValue;

      this.courseForm.setValue({
        title: course.title,
        description: course.description,
        img: course.img,
        date: this.getDateForInput(new Date(this.course.date)),
        duration: course.duration,
        difficulty: course.difficulty,
        trainers: course.trainers,
        type: course.type,
        language: course.language,
        rating: course.rating,
        isFavorite: course.isFavorite,
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

  onSubmit(): void {
    console.log(this.courseForm);
    console.log(this.courseForm.value);
    // this.course.date = new Date(this.date);
    // this.submited.emit(this.course);
  }

  // onTagItValueChanged(trainers: Trainer[]): void {
  //   this.course.trainers = trainers;
  // }

  // onDropdownValueChanged(value: string, prop: string): void {
  //   this.course[prop] = value;
  // }
}
