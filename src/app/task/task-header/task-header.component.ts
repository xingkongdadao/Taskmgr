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
  // 定义一个删除列表任务输出事件属性
  @Output() delList = new EventEmitter<void>();
  // 定义一个修改任务列表名称的输出事件属性
  @Output() editList = new EventEmitter<void>();

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
  // 点击删除任务列表事件执行方法
  onDelListClick() {
    // 将删除输出属性发射出去
    this.delList.emit();
  }

  // 修改任务列表名称点击事件的执行方法
  onEditListClick() {
    // 发射修改任务列表名称输出属性
    this.editList.emit();

  }
}
