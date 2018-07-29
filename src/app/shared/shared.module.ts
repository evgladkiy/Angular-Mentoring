import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services';

import { BreadcrumbsComponent, ModalWindowComponent } from './components';

import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    BreadcrumbsComponent,
    CapitalizedPipe,
    DurationPipe,
    OrderByPipe,
    ModalWindowComponent,
  ],
  providers: [ AuthService ],
  exports: [
    BreadcrumbsComponent,
    ModalWindowComponent,
    CapitalizedPipe,
    DurationPipe,
    OrderByPipe,
  ],
})
export class SharedModule { }
