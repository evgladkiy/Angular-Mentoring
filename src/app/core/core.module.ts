import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import {
  HeaderComponent,
  FooterComponent,
  HeaderLogoComponent,
  UserPanelComponent,
  BreadcrumbsComponent
 } from './';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLogoComponent,
    UserPanelComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
})
export class CoreModule { }
