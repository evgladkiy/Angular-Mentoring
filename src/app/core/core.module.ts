import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guards/auth.guard';
import { CourseResolver } from './resolvers/course.resolver';

import {
  HeaderComponent,
  FooterComponent,
  HeaderLogoComponent,
  UserPanelComponent,
  SpinnerComponent,
 } from './components';
import { SpinnerService } from './components/spinner/spinner.service';
import { AppStoreModule } from './@Ngrx/app-store.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppStoreModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLogoComponent,
    UserPanelComponent,
    SpinnerComponent,
  ],
  providers: [
    AuthGuard,
    CourseResolver,
    SpinnerService,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],
})
export class CoreModule { }
