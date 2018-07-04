import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { CoursesService } from './courses.service';

import { CourseListComponent } from './course-list/course-list.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoursesPaginationComponent } from './courses-pagination/courses-pagination.component';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        CourseListComponent,
        ToolboxComponent,
        CoursesPageComponent,
        CourseListItemComponent,
        CoursesPaginationComponent,
    ],
    providers: [ CoursesService ],
    exports: [ CoursesPageComponent ],
})
export class CoursesModule { }
