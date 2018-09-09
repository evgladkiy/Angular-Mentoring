import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';
import { HighlightByDateDirective, HighlightByTextDirective } from './directives';
import {
  AuthService,
  CoursesService,
  ReqParamsService,
} from './services';
import {
  TagItComponent,
  DroplistComponent,
  CourseFormComponent,
  ModalWindowComponent,
  BreadcrumbsComponent,
  DurationInputComponent,
  DateInputComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    OrderByPipe,
    DurationPipe,
    CapitalizedPipe,
    TagItComponent,
    DroplistComponent,
    CourseFormComponent,
    ModalWindowComponent,
    BreadcrumbsComponent,
    HighlightByDateDirective,
    HighlightByTextDirective,
    DurationInputComponent,
    DateInputComponent,
  ],
  providers: [
    AuthService,
    CoursesService,
    ReqParamsService,
  ],
  exports: [
    OrderByPipe,
    DurationPipe,
    CapitalizedPipe,
    TagItComponent,
    DroplistComponent,
    CourseFormComponent,
    ModalWindowComponent,
    BreadcrumbsComponent,
    HighlightByDateDirective,
    HighlightByTextDirective
  ],
})
export class SharedModule { }
