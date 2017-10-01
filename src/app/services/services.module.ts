import {ModuleWithProviders, NgModule} from '@angular/core';

// 4-4节有改造
@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: []
    };
  }
}
