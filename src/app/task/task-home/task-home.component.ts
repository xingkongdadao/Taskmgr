import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

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
  constructor( private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
  }

  // 监听到task-header组件发出的newTask输出事件后，执行下面方法。
  launchNewTaskDialog() {
    // 打开新任务对话框组件。在此之前需要将NewTaskComponent组件在Task模块中，加入
    this.dialog.open(NewTaskComponent);
  }

  launchCopyTaskDialog() {
    // 打开新任务对话框组件。在此之前需要将NewTaskComponent组件在Task模块中，加入
    this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});

  }
}




















