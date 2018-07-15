import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        HeaderLogoComponent,
        UserPanelComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
})
export class CoreModule { }
