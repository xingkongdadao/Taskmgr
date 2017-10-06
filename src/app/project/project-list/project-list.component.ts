import {Component, HostBinding, OnInit} from '@angular/core';
// 导入MdDialog
import {MdDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
// 导入路由动画
import {slideToRight} from '../../anims/router.anim';
import {listAnimation} from '../../anims/list.anim';
import {ProjectService} from '../../services/project.service';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {Project} from '../../domain/project.model';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import * as actions from '../../actions/project.action';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight, // 1  添加动画触发器
    listAnimation,
  ]

})
export class ProjectListComponent implements OnInit {

  // @HostBinding('@routeAnim') state;

  // projects1 = [
  //   {
  //     'id': 1,
  //     'name': '企业协作平台',
  //     'desc': '这是一个企业内部项目',
  //     'coverImg': 'assets/img/covers/0.jpg'
  //   },
  //   {
  //     'id': 2,
  //     'name': '企业协作平台',
  //     'desc': '这是一个企业内部项目',
  //     'coverImg': 'assets/img/covers/0.jpg'
  //   },
  //   {
  //     'id': 3,
  //     'name': '企业协作平台',
  //     'desc': '这是一个企业内部项目',
  //     'coverImg': 'assets/img/covers/0.jpg'
  //   },
  //
  //
  // ];


  projects$: Observable<Project[]>;
  listAnim$: Observable<number>;

  // 将MdDialog进行注册，实例化
  constructor(
    public dialog: MdDialog,
    private store$: Store<fromRoot.State>
    // private service$: ProjectService
  ) {
    this.store$.dispatch(new actions.LoadProjectsAction(null));
    this.projects$ = this.store$.select(fromRoot.getProjects);
    this.listAnim$ = this.projects$.map(p => p.length);
  }

  ngOnInit() {
    // this.service$.get('37489e0c-df34-c261-71c4-ce75357e3035')
    //   .subscribe(projects => {
    //     this.projects = projects;
    //     // this.cd.markForCheck();
    //   });
  }

  // 新建项目按钮对应的事件方法
  openNewProjectDialog() {
    const img = `/assets/img/covers/${Math.floor(Math.random() * 40)}_tn.jpg`;
    const thumbnails$ = this.getThumbnailsObs();

    // 对话框默认情况是不支持主题改变的。
    // 打开对话框组件NewProjectComponent,第一个为组件名称，后面为要传入组件的数据,数据可以为任意类型的。
    // 之后配置要打开的组件对话框。
    // 在dialog.open的时候，其实是有返回数据的。
    const dialogRef = this.dialog.open(
      NewProjectComponent,
      {data: {thumbnails: this.getThumbnails(), img: img}});
    // 处理返回的数据,打印到控制台。afterClosed()是Rx的一个可观察对象。然后用订阅方法输出出来。或者是想做的任何操作。

    dialogRef.afterClosed().take(1)
      .filter(n => n)
      .map(project => ({...project, coverImg: this.buildImgSrc(project.coverImg)}))
      // .switchMap(v => this.service$.add(v))
      .subscribe(project => {
      if (project) {
        this.store$.dispatch(new actions.AddProjectAction(project));
        // this.projects = [...this.projects, project];
      }
    });

  }

  // 邀请按钮对应的事件方法
  launchInviteDialog(project) {
    // 打开对话框组件InviteComponent,不需要传入数据。
    const dialogRef = this.dialog.open(InviteComponent, {data: {members: [], project: project}});
    // dialogRef.afterClosed().subscribe(result => console.log(result));

  }

  // 弹出项目编辑窗口
  launchUpdateDialog(project: Project) {
    const dialogRef = this.dialog.open(
      NewProjectComponent,
      {data: {thumbnails: this.getThumbnails(), project: project}});

    dialogRef.afterClosed().take(1)
      .filter(n => n)
      .map(val => ({...val, id: project.id, coverImg: this.buildImgSrc(val.coverImg)}))
      // .switchMap(v => this.service$.update(v))
      .subscribe(val => {
        this.store$.dispatch(new actions.UpdateProjectAction(project));

        // const index = this.projects.map(p => p.id).indexOf(val.id);
        // this.projects = [...this.projects.slice(0, index), val, ...this.projects.slice(index + 1)];
      });
  }

  // 点击确认输出事件执行方法
  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '您确认删除该项目吗？'}});
    dialogRef.afterClosed()
      .take(1)
      // .switchMap(_ => this.service$.delete(project))
      .subscribe(result => {
        this.store$.dispatch(new actions.DeleteProjectAction(project));

        // this.projects = this.projects.filter(p => p.id !== result.id);
    });
  }

  private getThumbnails() {
    return _.range(0, 40)
      .map(i => `/assets/img/covers/${i}_tn.jpg`);
  }

  private getThumbnailsObs(): Observable<string[]> {
    return Observable
      .range(0, 40)
      .map(i => `/assets/img/covers/${i}_tn.jpg`)
      .reduce((r, x) => {
        return [...r, x];
      }, []);
  }

  private buildImgSrc(img: string): string {
    return img.indexOf('_') > -1 ? img.split('_', 1)[0] + '.jpg' : img;
  }

}

















