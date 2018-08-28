import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';
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
} from './components';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
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
  ],
})
export class SharedModule { }
