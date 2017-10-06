import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {getAuthState} from '../reducers/index';
import {go} from '@ngrx/router-store';

@Injectable()
export class AuthGuardService implements CanActivate {
  /**
   * 构造函数用于注入服务的依赖以及进行必要的初始化
   *
   * @param router 路由注入，用于导航处理
   * @param store$ redux store注入，用于状态管理
   */
  constructor(private store$: Store<fromRoot.State>) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store$
      .select(getAuthState)
      .map(auth => {
        const result = auth.token !== null && auth.token !== undefined;
        if (result) {
          this.store$.dispatch(go(['/login/login']));
        }
        return result;
      })
      .defaultIfEmpty(false);
  }
}
