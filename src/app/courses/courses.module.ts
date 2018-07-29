import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CoursesService } from '../shared/services/courses/courses.service';

import { CourseListComponent } from './course-list/course-list.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoursesPaginationComponent } from './courses-pagination/courses-pagination.component';
import { CourseListItemHeaderComponent } from './course-list-item-header/course-list-item-header.component';
import { CourseListItemBodyComponent } from './course-list-item-body/course-list-item-body.component';
import { CourseListItemFooterComponent } from './course-list-item-footer/course-list-item-footer.component';

import { HighlightByDateDirective } from './course-list/highlight-by-date.directive';
import { CoursesFilterPipe } from './courses-page/courses-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    HighlightByDateDirective,
    CourseListComponent,
    ToolboxComponent,
    CoursesPageComponent,
    CourseListItemComponent,
    CoursesPaginationComponent,
    CoursesFilterPipe,
    CourseListItemHeaderComponent,
    CourseListItemBodyComponent,
    CourseListItemFooterComponent,
  ],
  providers: [ CoursesService ],
  exports: [ CoursesPageComponent ],
})
export class CoursesModule { }
