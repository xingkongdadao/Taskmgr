import {NgModule, Optional, SkipSelf} from '@angular/core';
// 1 使用外部svg，首先导入这两个东西。而且也需要HttpModule模块
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import {SharedModule} from '../shared/shared.module';

import {CoreRoutingModule} from './core-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
// 2 使用svg的时候也是需要导入HttpModule的。
import {HttpModule} from '@angular/http';
// 3 导入工具类，制作svg使用
import {loadSvgResources} from '../utils/svg.util';
// 动画需要使用的模块
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import 'rxjs/add/operator/take';
import {ServicesModule} from '../services/services.module';

// 导入storeModule
import {AppStoreModule} from '../reducers';

import '../utils/debug.util';
// import 'hammerjs';
import '../utils/debug.util';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/do';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
    ServicesModule.forRoot(),
    AppStoreModule,  // 导入AppStoreModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [
    // 放在这个池子里面的是单件，所有调用者调用的都是同一个东西。
    {provide: 'BASE_CONFIG', useValue: {
      uri: 'http://localhost:3000',
    }}
  ],
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,  // 4 为了使用svg
    ds: DomSanitizer,    // 4 为了使用svg
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    // 5 实现工具类方法，  然后另写文件保存这个方法，并随时扩充这个方法。
    loadSvgResources(ir, ds);

  }
}
