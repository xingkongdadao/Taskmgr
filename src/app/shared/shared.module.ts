import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
} from '@angular/material';

import {SharedRoutingModule} from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,

  ],
  declarations: []
})
export class SharedModule {
}
