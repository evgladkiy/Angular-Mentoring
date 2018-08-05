import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService, CoursesService, ModalWindowService } from './services';

import { ModalWindowComponent, CourseFormComponent, FormDroplistComponent } from './components';

import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';

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
    FormDroplistComponent,
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
  ],
})
export class SharedModule { }
