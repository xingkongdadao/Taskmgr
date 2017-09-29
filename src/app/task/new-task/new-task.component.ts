import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  title = '';

  priorities = [
    {
      label: '紧急',
      value: 1,
    },
    {
      label: '重要',
      value: 2,
    },
    {
      label: '普通',
      value: 3,
    },
  ];

  constructor(@Inject(MD_DIALOG_DATA) private data) {
  }

  ngOnInit() {
    // 标题赋值
    this.title = this.data.title;

    // 打印传入的值
    console.log(JSON.stringify(this.data.task));

  }

  onClick() {

  }

}
