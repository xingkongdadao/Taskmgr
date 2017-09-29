import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import {SharedModule} from '../shared/shared.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
  ],
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
  ],
  // 加入entryComponents中的组件可以以窗口的形式展现出来。
  entryComponents: [
    NewTaskComponent,
    CopyTaskComponent,
  ],
})
export class TaskModule { }
