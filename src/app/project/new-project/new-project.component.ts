// 为了导入数据，需要导入Inject
import { Component, OnInit, Inject } from '@angular/core';

// 引入一个令牌，以便可以接收导入进来的数据。
// 若想数据回传，需要引入  MdDialogRef
// 若是想让对话框支持主题变化，需要导入 OverlayContainer
import {MD_DIALOG_DATA, MdDialogRef, OverlayContainer} from '@angular/material';



@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  // 在结构中写入@Inject(MD_DIALOG_DATA) private data，就相当于需要传入的数据data已经传进来了。
  // 导出数据则，需要 private dialogRef: MdDialogRef<NewProjectComponent>
  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<NewProjectComponent>,
    // private oc: OverlayContainer, 在app.component中设置全局了，这里就不需要了
    ) { }

  ngOnInit() {
    // 测试传入的数据
    console.log(JSON.stringify(this.data));
  }

    // 处理保存按钮事件。
  onClick() {
    // 在关闭窗口的时候，返回数据给父组件中的open方法 return 。之后再在父组件 Project-list中处理
    this.dialogRef.close('I received your massage');

  }

}
