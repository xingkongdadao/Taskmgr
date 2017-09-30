import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaskRoutingModule} from './task-routing.module';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {SharedModule} from '../shared/shared.module';
import {NewTaskComponent} from './new-task/new-task.component';
import {CopyTaskComponent} from './copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from './new-task-list/new-task-list.component';

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
    NewTaskListComponent,
  ],
  // 加入entryComponents中的组件可以以窗口的形式展现出来。
  entryComponents: [
    NewTaskComponent,
    CopyTaskComponent,
    ConfirmDialogComponent,
    NewTaskListComponent,
  ],
})
export class TaskModule {
}
