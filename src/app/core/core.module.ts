import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

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
import { userReducer, UserEffects } from './@Ngrx';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppStoreModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
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
