import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { AddCourseModule } from './add-course/add-course.module';
import { ErrorPageModule } from './error-page/error-page.module';

import { AuthGuard } from './guards/auth.guard';
import { EditCourseModule } from './edit-course/edit-course.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    LoginModule,
    SharedModule,
    CoursesModule,
    AddCourseModule,
    EditCourseModule,
    ErrorPageModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
