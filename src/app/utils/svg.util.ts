import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
  const imgDir = 'assets/img';
  const sidebarDir = imgDir + '/sidebar';
  const daysDir = imgDir + '/days';
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
  ir.addSvgIcon('days', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/days.svg'));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/month.svg'));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/project.svg'));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/projects.svg'));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(sidebarDir + '/week.svg'));

  // ir.addSvgIcon('day1', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-1.svg'));
  // ir.addSvgIcon('day2', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-2.svg'));
  // ir.addSvgIcon('day3', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-3.svg'));
  // ir.addSvgIcon('day4', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-4.svg'));
  // ir.addSvgIcon('day5', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-5.svg'));
  // ir.addSvgIcon('day6', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-6.svg'));
  // ir.addSvgIcon('day7', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-7.svg'));
  // ir.addSvgIcon('day8', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-8.svg'));
  // ir.addSvgIcon('day9', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-9.svg'));
  // ir.addSvgIcon('day10', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-10.svg'));
  // ir.addSvgIcon('day11', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-11.svg'));
  // ir.addSvgIcon('day12', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-12.svg'));
  // ir.addSvgIcon('day13', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-13.svg'));
  // ir.addSvgIcon('day14', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-14.svg'));
  // ir.addSvgIcon('day15', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-15.svg'));
  // ir.addSvgIcon('day16', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-16.svg'));
  // ir.addSvgIcon('day17', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-17.svg'));
  // ir.addSvgIcon('day18', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-18.svg'));
  // ir.addSvgIcon('day19', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-19.svg'));
  // ir.addSvgIcon('day20', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-20.svg'));
  // ir.addSvgIcon('day21', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-21.svg'));
  // ir.addSvgIcon('day22', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-22.svg'));
  // ir.addSvgIcon('day23', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-23.svg'));
  // ir.addSvgIcon('day24', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-24.svg'));
  // ir.addSvgIcon('day25', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-25.svg'));
  // ir.addSvgIcon('day26', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-26.svg'));
  // ir.addSvgIcon('day27', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-27.svg'));
  // ir.addSvgIcon('day28', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-28.svg'));
  // ir.addSvgIcon('day29', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-29.svg'));
  // ir.addSvgIcon('day30', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-30.svg'));
  // ir.addSvgIcon('day31', ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-31.svg'));
  //
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  days.forEach(d => ir.addSvgIcon('day' + d, ds.bypassSecurityTrustResourceUrl(daysDir + '/DAYS-' + d + '.svg')));

};

