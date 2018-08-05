import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthService, CoursesService, ModalWindowService } from './services';
import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';
import {
  ModalWindowComponent,
  CourseFormComponent,
  DroplistComponent,
  TagItComponent
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
    ModalWindowComponent,
    CourseFormComponent,
    TagItComponent,
    DroplistComponent,
  ],
  providers: [
    AuthService,
    CoursesService,
    ModalWindowService,
  ],
  exports: [
    OrderByPipe,
    DurationPipe,
    CapitalizedPipe,
    ModalWindowComponent,
    CourseFormComponent,
    TagItComponent,
    DroplistComponent,
  ],
})
export class SharedModule { }
