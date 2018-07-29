import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCoursePageComponent } from './add-course-page/add-course-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ AddCoursePageComponent ],
  exports: [ AddCoursePageComponent ],
})
export class AddCourseModule { }
