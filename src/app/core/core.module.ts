import {NgModule, Optional, SkipSelf} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';

import {CoreRoutingModule} from './core-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpModule} from '@angular/http';
import {loadSvgResources} from '../utils/svg.util';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    loadSvgResources(ir, ds);

  }
}
