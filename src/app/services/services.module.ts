import {ModuleWithProviders, NgModule} from '@angular/core';
import {QuoteService} from './quote.service';
import {ProjectService} from './project.service';

// 4-4节有改造
@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        ProjectService,
      ]
    };
  }
}
