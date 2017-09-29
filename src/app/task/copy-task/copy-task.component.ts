import {Component, Inject, OnInit} from '@angular/core';
// 引入一个令牌MD_DIALOG_DATA，以便可以接收导入进来的数据。
// 若想数据回传，需要引入  MdDialogRef
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {


  lists: any[];

  constructor(@Inject(MD_DIALOG_DATA) private data,  // 在结构中写入@Inject(MD_DIALOG_DATA) private data，就相当于需要传入的数据data已经传进来了。
              private dialogRef: MdDialogRef<CopyTaskComponent>, // 导出数据则，需要 private dialogRef: MdDialogRef<NewProjectComponent>
  ) {
  }

  ngOnInit() {
    // 测试传入的数据
    console.log(JSON.stringify(this.data));

    // 将传入的数据赋值给lists
    this.lists = this.data.lists;
  }

  onClick() {
    // 在关闭窗口的时候，返回数据给父组件中的open方法 return 。之后再在父组件 Project-list中处理
    this.dialogRef.close('I received your massage');

  }

}
