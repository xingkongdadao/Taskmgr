// 导入Output, EventEmitter,将事件导出，以便显示模块不处理逻辑。
import {Component, Input, OnInit, Output, EventEmitter, HostBinding, HostListener} from '@angular/core';
// 引入动画
import {cardAnim} from '../../anims/card.anim';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim, // 1  添加动画触发器
  ]
})
export class ProjectItemComponent implements OnInit {
  // 输入属性，接受项目列表传过来的单个项目信息
  @Input() item;
  // 让父组件知道这个事件发生了，但是自己不处理事件。
  @Output() onInvite = new EventEmitter<void>();
  // 创建一个输出事件，
  @Output() onEdit = new EventEmitter<void>();
  // 创建一个删除输出事件
  @Output() onDel = new EventEmitter<void>();

  @Output() onSelected = new EventEmitter<void>();

  // 2 绑定触发器 @card, 并为状态 cardState 赋初始值
  @HostBinding('@card') cardState = 'out';

  constructor() {
  }

  ngOnInit() {
  }

  // 3 监听鼠标进入事件，并执行 onMouseEnter方法体
  @HostListener('mouseenter')
  onMouseEnter() {
    // 为状态重新赋值
    this.cardState = 'hover';
  }

  // 4 监听鼠标进入事件，并执行 onMouseLeave 方法体
  @HostListener('mouseleave')
  onMouseLeave() {
    // 为状态重新赋值
    this.cardState = 'out';
  }


  onInviteClick(ev: Event) {
    ev.stopPropagation();
    // 将事件发射出去，让父组件知道。
    this.onInvite.emit();

  }

  onEditClick(ev: Event) {
    ev.stopPropagation();
    // 将事件发射出去，让父组件知道。
    this.onEdit.emit();
  }

  // 项目删除按钮点击事件执行方法
  onDelClick(ev: Event) {
    ev.stopPropagation();
    // 发射出点击输出属性
    this.onDel.emit();

  }

  onClick() {
    this.onSelected.emit();
  }
}












