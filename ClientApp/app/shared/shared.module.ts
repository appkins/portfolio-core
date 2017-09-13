import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAppModule } from './material-app/material-app.module';
// import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  exports: [CommonModule, MaterialAppModule]
  // declarations: [SidebarComponent]
})
export class SharedModule { }
