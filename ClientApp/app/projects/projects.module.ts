import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ProjectsComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
