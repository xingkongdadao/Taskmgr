import {Component, Input, OnInit} from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';

  }

}
