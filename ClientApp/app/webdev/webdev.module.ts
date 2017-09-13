import { WebdevComponent } from './webdev.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: WebdevComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [WebdevComponent]
})
export class WebdevModule { }
