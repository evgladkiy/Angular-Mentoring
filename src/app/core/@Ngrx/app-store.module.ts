import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { routerReducers, RouterStateSerializerProvider } from './router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './router/router.effects';
import { trainersReducer, TrainersEffects } from './trainers';

import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    EffectsModule.forRoot([RouterEffects, TrainersEffects]),
    StoreModule.forFeature('trainers', trainersReducer),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [RouterStateSerializerProvider],
  declarations: []
})
export class AppStoreModule { }
