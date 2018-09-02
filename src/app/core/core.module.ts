import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './@Ngrx/app-store.module';
import { userReducer, UserEffects } from './@Ngrx';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import {
  HeaderComponent,
  FooterComponent,
  HeaderLogoComponent,
  UserPanelComponent,
  SpinnerComponent,
 } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppStoreModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLogoComponent,
    UserPanelComponent,
    SpinnerComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],
})
export class CoreModule { }
