import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  // 输入属性，可以不定义类型，在传入数据时，自动定义类型。
  // 从task-home模板中传进来
  @Input() item;
  @Input() avatar;
  // 定义一个输出属性事件，传出事件
  @Output() taskClick = new EventEmitter<void>();


  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';

  }

  // md-list-item点击事件响应方法体
  onItemClick() {
    // 将点击事件发射出去
    this.taskClick.emit();
  }

  // 点击CheckBox， 而不弹出修改任务窗口。
  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }
}













