import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [ EditCoursePageComponent ],
})
export class EditCourseModule { }
