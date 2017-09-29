import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  // 设置header输入属性，接收 。task-home出入的值。
  @Input() header = '';
  // 1.定义一个新任务输出事件属性，
  @Output() newTask = new EventEmitter<void>();
  // 1,定义一个copy任务输出事件属性
  @Output() moveAll = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  // 新建任务按钮click事件的执行方法
  onNewTaskClick() {
    // 2. 将新任务输出属性发射出去，以被父组件监听到。
    this.newTask.emit();
  }

  onMoveAllClick() {
    // 2. 将移动任务输出属性发射出去，以被父组件监听到。
    this.moveAll.emit();
  }
}
