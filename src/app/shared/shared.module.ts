import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
