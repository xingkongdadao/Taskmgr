import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import * as actions from '../actions/auth.action';
import {AuthService} from '../services/auth.service';
import {User} from '../domain/user.model';
import {go} from '@ngrx/router-store';

@Injectable()
export class AuthEffects {
  /**
   *
   */
  @Effect()
  login$: Observable<Action> = this.actions$     // 监听actions数据流
    .ofType(actions.ActionTypes.LOGIN)          // 捕获到QUOTE这个ACTION
    .map(toPayload)
    .switchMap(({email, password}) => this.service$
    .login(email, password)
    .map(auth => new actions.LoginSuccessAction(auth))     // 成功的时候加载成功的action
    .catch(err => of(new actions.LoginFailAction(JSON.stringify(err))))  // 失败的时候加载失败的action
    );

  @Effect()
  register: Observable<Action> = this.actions$     // 监听actions数据流
    .ofType(actions.ActionTypes.REGISTER)          // 捕获到QUOTE这个ACTION
    .map(toPayload)
    .switchMap((user: User) => this.service$
      .register(user)
      .map(auth => new actions.RegisterSuccessAction(auth))     // 成功的时候加载成功的action
      .catch(err => of(new actions.RegisterFailAction(JSON.stringify(err))))  // 失败的时候加载失败的action
    );

  @Effect()
  navigateHome$: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.LOGIN_SUCCESS)
    .map(() => go(['/project']));

  @Effect()
  registerAndHome$: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.REGISTER_SUCCESS)
    .map(() => go(['/project']));

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.LOGOUT)
    .map(() => go(['/']));





  /**
   *
   * @param actions$
   * @param quoteService$
   */
  constructor(
    private actions$: Actions,
    private service$: AuthService
  ) {}
}
