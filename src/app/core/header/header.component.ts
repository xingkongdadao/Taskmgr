import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // 定义事件
  @Output() toggle = new EventEmitter<void>();

  constructor(iconRegistry: MdIconRegistry, sanitier: DomSanitizer) {
    iconRegistry.addSvgIcon('gifts', sanitier.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
  }

  ngOnInit() {
  }

  openSidebar() {
    // 发射事件
    this.toggle.emit();

  }
}
