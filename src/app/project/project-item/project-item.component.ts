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

  constructor() {
  }

  ngOnInit() {
  }

  onInviteClick() {
    // 将事件发射出去，让父组件知道。
    this.onInvite.emit();

  }
}












