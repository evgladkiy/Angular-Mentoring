import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { LoginPageModule } from './login-page/login-page.module';
import { ErrorPageModule } from './error-page/error-page.module';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { CourseListPageModule } from './course-list-page/course-list-page.module';
import { EditCoursePageModule } from './edit-course-page/edit-course-page.module';
import { AddCoursePageModule } from './add-course-page/add-course-page.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    SharedModule,
    LoginPageModule,
    AddCoursePageModule,
    EditCoursePageModule,
    CourseListPageModule,
    ErrorPageModule,
    CoursesPageModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
