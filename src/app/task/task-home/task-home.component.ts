import {Component, HostBinding, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {slideToRight} from '../../anims/router.anim';
import * as fromRoot from '../../reducers/index';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {TaskList} from '../../domain/task-list.model';
import * as actions from '../../actions/task-list.action';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight, // 1  添加动画触发器
  ]

})
export class TaskHomeComponent implements OnInit {

  // @HostBinding('@routeAnim') state;
  projectId$: Observable<string>;
  lists$: Observable<TaskList>;


  // 注入一个对话框dialog
  constructor(
    private dialog: MdDialog,
    private store$: Store<fromRoot.State>,
    private route$: ActivatedRoute,
  ) {
    this.projectId$ = this.route$.paramMap.pluck('id');
    this.lists$ = this.store$.select(fromRoot.getTaskLists);
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
  }

  // 监听到task-header组件发出的newTask输出事件后，执行下面方法。
  launchNewTaskDialog() {
    // 打开新任务对话框组件。在此之前需要将NewTaskComponent组件在Task模块中，加入
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  launchCopyTaskDialog() {
    // 打开新任务对话框组件。在此之前需要将NewTaskComponent组件在Task模块中，加入
    // const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});

  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  // 监听到删除任务列表输出属性后，执行此方法， 打开ConfirmDialogComponent组件窗口
  launchConfirmDialog(list: TaskList) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除任务',
        content: '您确认删除任务列表吗？',
        list: list
      }
    });
    dialogRef.afterClosed()
      .take(1)
      .filter(n => n)
      .subscribe(result => this.store$.dispatch(new actions.DeleteTaskListAction(list)));
  }

  launchEditListDialog(list) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '修改任务列表名称', taskList: list}});
    dialogRef.afterClosed()
      .take(1)
      .filter(n => n)
      .subscribe(result => this.store$.dispatch(new actions.UpdateTaskListAction({...result, id: list.id})));
  }

  // 新建任务列表
  launchNewListDialog(ev: Event) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建任务列表名称'}});
    dialogRef.afterClosed().subscribe(result => this.store$.dispatch(new actions.AddTaskListAction(result)));
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      default:
        break;
    }
  }

  handleQuickTask(desc: string) {
    console.log('输出事件传出的数据：' + desc);
  }
}




















