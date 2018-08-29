import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './@Ngrx/app-store.module';
import { userReducer, UserEffects, RouterEffects } from './@Ngrx';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { SpinnerService } from './components/spinner/spinner.service';
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
    EffectsModule.forRoot([RouterEffects]),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLogoComponent,
    UserPanelComponent,
    SpinnerComponent,
  ],
  providers: [ SpinnerService ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],
})
export class CoreModule { }
