import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import { getAuthState} from '../../reducers/index';
import * as fromRoot from '../../reducers/index';
import {Observable} from 'rxjs/Observable';
import {Auth} from '../../domain/auth.model';
import * as actions from '../../actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth$: Observable<Auth>;
  // 定义事件
  @Output() toggle = new EventEmitter<void>();

  constructor(private store$: Store<fromRoot.State>) {
    this.auth$ = this.store$.select(getAuthState);
  }

  ngOnInit() {
  }

  openSidebar() {
    // 发射事件
    this.toggle.emit();

  }

  logout() {
    this.store$.dispatch(new actions.LogoutAction(null));
  }
}
