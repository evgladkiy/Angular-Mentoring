import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AddCoursePageComponent } from './add-course/add-course-page/add-course-page.component';
import { EditCoursePageComponent } from './edit-course/edit-course-page/edit-course-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', canActivate: [ AuthGuard ], component: CoursesPageComponent },
  { path: 'courses/new', canActivate: [ AuthGuard ], component: AddCoursePageComponent },
  { path: 'courses/:id', canActivate: [ AuthGuard ], component: EditCoursePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '404', canActivate: [ AuthGuard ], component: ErrorPageComponent },
  { path: '**', redirectTo: '/404',  pathMatch: 'full' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
