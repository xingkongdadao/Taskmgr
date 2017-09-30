import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 动画模块
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdSidenavModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {LoginModule} from './login/login.module';
import {ProjectModule} from './project/project.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MdSidenavModule,
    AppRoutingModule,
    LoginModule,
    ProjectModule,
    BrowserAnimationsModule,  // 动画模块,最好最后导入
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
