import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/material';

// 动画
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // 定义一个触发器
    trigger('square',
      [
        state('green',
          style({
            'background-color': 'green',
            'height': '100px',
            'transform': 'translateX(0)'
          })),

        state('red', style({
          'background-color': 'red',
          'height': '50px',
          'transform': 'translateX(100%)'
        })),
        transition('green => red', animate('.2s 1s')),
        transition('red => green', animate(500)),

      ])
  ]
})
export class AppComponent {
  squareState: string;

  // 为设置弹出组件方便， 全局定义OverlayContainer
  constructor(private oc: OverlayContainer) {

  }

  title = 'app';


  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
























