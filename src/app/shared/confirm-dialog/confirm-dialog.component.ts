import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  title = '';
  content = '';

  constructor(
    private dialogRef: MdDialogRef<ConfirmDialogComponent>,
    @Inject(MD_DIALOG_DATA) private data,
  ) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  // 点击按钮事件方法
  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
