// 导入Output, EventEmitter,将事件导出，以便显示模块不处理逻辑。
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
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

  constructor() {
  }

  ngOnInit() {
  }

  onInviteClick() {
    // 将事件发射出去，让父组件知道。
    this.onInvite.emit();

  }

  onEditClick() {
    // 将事件发射出去，让父组件知道。
    this.onEdit.emit();
}

  // 项目删除按钮点击事件执行方法
  onDelClick() {
    // 发射出点击输出属性
    this.onDel.emit();

  }
}












