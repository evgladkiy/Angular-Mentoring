import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CoursesModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
