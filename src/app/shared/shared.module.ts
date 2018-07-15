import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components';

import { AuthService } from './services';

import { CapitalizedPipe, DurationPipe, OrderByPipe } from './pipes';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    BreadcrumbsComponent,
    CapitalizedPipe,
    DurationPipe,
    OrderByPipe,
  ],
  providers: [ AuthService ],
  exports: [
    BreadcrumbsComponent,
    CapitalizedPipe,
    DurationPipe,
    OrderByPipe,
  ],
})
export class SharedModule { }
