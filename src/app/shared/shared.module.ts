import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';
import { HighlightByDateDirective } from './directives';
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
  TagItItemTextComponent,
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
    DurationInputComponent,
    DateInputComponent,
    TagItItemTextComponent,
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
  ],
})
export class SharedModule { }
