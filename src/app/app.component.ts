import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/material';

// 动画
import {trigger, state, transition, style, animate, keyframes} from '@angular/animations';

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
            'transform': 'translateY(-100%)'
          })),

        state('red', style({
          'background-color': 'red',
          'height': '100px',
          'transform': 'translateY(100%)'
        })),
        transition('green => red', animate('.8s cubic-bezier(.81,1.54,.57,1.19)')),
        transition('red => green', animate(5000, keyframes(([
          style({transform: 'translateY(100%)'}),
          style({transform: 'translateY(98%)'}),
          style({transform: 'translateY(95%)'}),
          style({transform: 'translateY(90%)'}),
          style({transform: 'translateY(80%)'}),
          style({transform: 'translateY(60%)'}),
          style({transform: 'translateY(30%)'}),
          style({transform: 'translateY(0)'}),
          style({transform: 'translateY(-10%)'}),

          style({transform: 'translateY(-5%)'}),
          style({transform: 'translateY(-2%)'}),
          style({transform: 'translateY(0)'}),
          style({transform: 'translateY(10%)'}),
          style({transform: 'translateY(15%)'}),
          style({transform: 'translateY(-15%)'}),
          style({transform: 'translateY(-40%)'}),
          style({transform: 'translateY(-80%)'}),
          style({transform: 'translateY(-90%)'}),
          style({transform: 'translateY(-95%)'}),

          style({transform: 'translateY(100%)'}),

        ])))),

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
























