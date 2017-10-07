import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {
  form: FormGroup;
  // 组件窗口标题
  title = '';

  // 注入接收导入数据的 data
  // 注入返回数据的dialogRef
  constructor(
    private fb: FormBuilder,
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<NewTaskListComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.form = this.fb.group({
      name: [this.data.taskList ? this.data.taskList.name : '', Validators.required],
    });
  }

  // onClick() {
  //   this.dialogRef.close(this.title);
  // }
  onSubmit({value, valid}) {
    if (!valid) {
      return;
    }
    this.dialogRef.close(value);
  }

}








