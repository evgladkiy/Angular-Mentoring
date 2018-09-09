import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CourseListPageComponent } from './course-list-page.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseListItemHeaderComponent } from './course-list-item-header/course-list-item-header.component';
import { CourseListItemBodyComponent } from './course-list-item-body/course-list-item-body.component';
import { CourseListItemFooterComponent } from './course-list-item-footer/course-list-item-footer.component';
import { CourseListPaginationComponent } from './course-list-pagination/course-list-pagination.component';
import { CourseListToolboxComponent } from './course-list-toolbox/course-list-toolbox.component';

import { CoursesFilterPipe } from './courses-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    CourseListPageComponent,
    CoursesFilterPipe,
    CourseListItemComponent,
    CourseListItemHeaderComponent,
    CourseListItemBodyComponent,
    CourseListItemFooterComponent,
    CourseListPaginationComponent,
    CourseListToolboxComponent,
  ],
  exports: [ CourseListPageComponent ],
})
export class CourseListPageModule { }
