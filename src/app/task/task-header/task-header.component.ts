import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  // 设置header输入属性，接收 。task-home出入的值。
  @Input() header = '';

  constructor() { }

  ngOnInit() {
  }

}
