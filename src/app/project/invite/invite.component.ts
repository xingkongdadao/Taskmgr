import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../domain/user.model';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  members: User[] = [];

  // items = [
  //   {
  //     id: 1,
  //     name: 'zhangsan',
  //   },
  //   {
  //     id: 2,
  //     name: 'lisi',
  //   },
  //   {
  //     id: 3,
  //     name: 'wangwu',
  //   },
  // ];

  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef<InviteComponent>) {
  }

  ngOnInit() {
    this.members = [...this.data.members];
  }

  // 保存按钮事件
  // onClick() {  }
  onSubmit(ev: Event, {valid, value}) {
    ev.preventDefault();
    if (!valid) {
      return;
    }
    this.dialogRef.close(this.members);

  }

  // 设置自动填充显示的是用户名字
  // displayUser(user: { id: string; name: string }) {
  //   return user ? user.name : '';
  // }
}
