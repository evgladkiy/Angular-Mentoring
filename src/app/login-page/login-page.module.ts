import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../core/@Ngrx/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../core/@Ngrx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [ LoginPageComponent ],
  exports: [ LoginPageComponent ],
})
export class LoginPageModule { }
