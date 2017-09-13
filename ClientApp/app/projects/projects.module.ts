import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { MdCardModule, MdGridListModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdGridListModule,
    MdButtonModule,
    RouterModule.forChild([
      { path: '', component: ProjectsComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
