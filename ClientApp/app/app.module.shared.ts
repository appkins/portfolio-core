import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        NoopAnimationsModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        AppComponent,
        CommonModule,
        HttpModule,
        FormsModule,
        NoopAnimationsModule,
        AppRoutingModule,
        SharedModule
    ]
})
export class AppModuleShared {
}
