import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService, CoursesService, ModalWindowService } from './services';

import { ModalWindowComponent } from './components';

import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    OrderByPipe,
    DurationPipe,
    CapitalizedPipe,
    ModalWindowComponent,
  ],
  providers: [
    AuthService,
    CoursesService,
    ModalWindowService,
  ],
  exports: [
    OrderByPipe,
    DurationPipe,
    CapitalizedPipe,
    ModalWindowComponent,
  ],
})
export class SharedModule { }
