import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'zhangsan',
    },
    {
      id: 2,
      name: 'lisi',
    },
    {
      id: 3,
      name: 'wangwu',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  // 保存按钮事件
  onClick() {  }

  // 设置自动填充显示的是用户名字
  displayUser(user: { id: string; name: string }) {
    return user ? user.name : '';
  }
}
