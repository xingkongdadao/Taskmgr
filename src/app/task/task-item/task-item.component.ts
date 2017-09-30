import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {itemAnim} from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim,        // 1 引入动画触发器
  ]
})
export class TaskItemComponent implements OnInit {
  // 输入属性，可以不定义类型，在传入数据时，自动定义类型。
  // 从task-home模板中传进来
  @Input() item;
  @Input() avatar;
  // 定义一个输出属性事件，传出事件
  @Output() taskClick = new EventEmitter<void>();

  // 2  为触发器赋值的属性，记录动画状态值。
  widerPriority = 'in';

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

  // 4 监听鼠标进入事件，然后执行方法体
  @HostListener('mouseenter')
  onMouseEnter() {
    // 修改触发器对应的状态值
    this.widerPriority = 'out';
  }

  // 5 监听鼠标离开事件，然后执行方法体
  @HostListener('mouseleave')
  onMouseLeave() {
    // 修改触发器对应的状态值
    this.widerPriority = 'in';
  }
}













