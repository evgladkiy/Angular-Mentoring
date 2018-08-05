import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [ AddCoursePageComponent ],
  exports: [ AddCoursePageComponent ],
})
export class AddCourseModule { }
