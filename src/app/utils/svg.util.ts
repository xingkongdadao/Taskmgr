import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

// 为了使用外部svg格式图标，按照下面的加载方式

export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
  // 设置文件目录，方便后面加载
  const imgDir = 'assets/img';
  const sidebarDir = imgDir + '/sidebar';
  const daysDir = imgDir + '/days';
  const avatarDir = imgDir + `/avatar`;
  const iconDir = imgDir + '/icons';

  // 加载方式： [svgIcon]="avatars"
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(avatarDir + `/avatars.svg`));

  // 加载方式： svgIcon="move"
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));

  ir.addSvgIcon('days', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/days.svg'));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/month.svg'));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/project.svg'));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/projects.svg'));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/week.svg'));

  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(iconDir + '/move.svg'));
  ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(iconDir + '/add.svg'));
  ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(iconDir + '/delete.svg'));
  ir.addSvgIcon('burger-navigation', ds.bypassSecurityTrustResourceUrl(iconDir + '/burger-navigation.svg'));
  ir.addSvgIcon('hand-grab-o', ds.bypassSecurityTrustResourceUrl(iconDir + '/hand-grab-o.svg'));

  ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(avatarDir + '/avatarDir.svg'));

  // 循环加载一个有规则的文件夹svg格式文件。
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  days.forEach(d => ir.addSvgIcon('day' + d, ds.bypassSecurityTrustResourceUrl(daysDir + '/day' + d + '.svg')));

};

