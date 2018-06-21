import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { CourseListComponent } from './course-list/course-list.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    CourseListComponent,
    ToolboxComponent,
    CoursesPageComponent,
  ],
  exports: [ CoursesPageComponent ],
})
export class CoursesModule { }
