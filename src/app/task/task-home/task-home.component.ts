import { Component, OnInit } from '@angular/core';

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
          desc: '任务一：去星巴克迈杯咖啡',
          completed: true,
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
          desc: '任务三：去星巴克迈杯咖啡',
          completed: false,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
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
          desc: '任务三：去星巴克迈杯咖啡',
          completed: false,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },

      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  openNewProjectDialog() {}

}
