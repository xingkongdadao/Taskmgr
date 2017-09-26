import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // 定义事件
  @Output() toggle = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  openSidebar() {
    // 发射事件
    this.toggle.emit();

  }
}
