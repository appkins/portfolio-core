import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdMenuModule, MdCardModule, MdTabsModule, MdIconModule, MdSidenavModule, MdListModule, MdToolbarModule,
  MdFormFieldModule, MdInputModule } from '@angular/material';

@NgModule({
  exports: [MdButtonModule, MdCardModule, MdInputModule, MdMenuModule, MdTabsModule, MdIconModule, MdSidenavModule, MdListModule, MdToolbarModule, FlexLayoutModule,
    MdFormFieldModule]
})
export class MaterialAppModule { }
