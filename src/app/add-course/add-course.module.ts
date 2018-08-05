import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [ AddCoursePageComponent ],
  exports: [ AddCoursePageComponent ],
})
export class AddCourseModule { }
