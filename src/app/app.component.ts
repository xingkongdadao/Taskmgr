import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // 为设置弹出组件方便， 全局定义OverlayContainer
  constructor(private oc: OverlayContainer) {

  }

  title = 'app';
}
