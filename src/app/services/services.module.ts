import {ModuleWithProviders, NgModule} from '@angular/core';
import {QuoteService} from './quote.service';
import {ProjectService} from './project.service';
import {TaskListService} from './task-list.service';
import {TaskService} from './task.service';
import {UserService} from "./user.service";

// 4-4节有改造
@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        ProjectService,
        TaskListService,
        TaskService,
        UserService,
      ]
    };
  }
}
