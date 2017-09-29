import {Component, OnInit} from '@angular/core';
// 导入MdDialog
import {MdDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },

  ];

  // 将MdDialog进行注册，实例化
  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  // 新建项目按钮对应的事件方法
  openNewProjectDialog() {
    // 对话框默认情况是不支持主题改变的。
    // 打开对话框组件NewProjectComponent,第一个为组件名称，后面为要传入组件的数据,数据可以为任意类型的。
    // 之后配置要打开的组件对话框。
    // 在dialog.open的时候，其实是有返回数据的。
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增项目'}});
    // 处理返回的数据,打印到控制台。afterClosed()是Rx的一个可观察对象。然后用订阅方法输出出来。或者是想做的任何操作。

    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  // 邀请按钮对应的事件方法
  launchInviteDialog() {
    // 打开对话框组件InviteComponent,不需要传入数据。
    const dialogRef = this.dialog.open(InviteComponent);
    // dialogRef.afterClosed().subscribe(result => console.log(result));

  }

  // 弹出项目编辑窗口
  launchUpdateDialog(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目', project: project}});
  }
}

















