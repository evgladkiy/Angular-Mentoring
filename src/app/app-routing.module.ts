import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CourseListPageComponent } from './course-list-page/course-list-page.component';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

import { AuthGuard } from './core/guards/auth.guard';
import { CourseResolver } from './core/resolvers/course.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    canActivate: [ AuthGuard ],
    component: CoursesPageComponent,
    children: [
      {
        path: '',
        component: CourseListPageComponent,
      },
      {
        path: 'new',
        component: AddCoursePageComponent,
      },
      {
        path: ':id',
        component: EditCoursePageComponent,
        resolve: {
          course: CourseResolver,
        }
      },
    ],
  },
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
