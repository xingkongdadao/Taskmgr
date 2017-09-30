import {Component, HostBinding, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {slideToRight} from '../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight, // 1  添加动画触发器
  ]

})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡哇哈哈',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },

        {
          id: 1,
          desc: '任务二：去星巴克迈杯咖啡',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务三：去星巴克迈杯咖啡',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },

      ],
    },
    {
      id: 1,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克迈杯咖啡',
          completed: false,
          priority: 1,

          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-14'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务二：去星巴克迈杯咖啡',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-15'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务三：去星巴克迈杯咖啡',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-16'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },

      ],
    },
  ];

  // 注入一个对话框dialog
  constructor(private dialog: MdDialog) {
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
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});

  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  // 监听到删除任务列表输出属性后，执行此方法， 打开ConfirmDialogComponent组件窗口
  launchConfirmDialog(list) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除任务',
        content: '您确认删除任务列表吗？',
        list: list
      }
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog(list) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '修改任务列表名称', list: list}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  // 新建任务列表
  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建任务列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}




















