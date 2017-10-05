import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import * as actions from '../actions/quote.action';
import {QuoteService} from '../services/quote.service';

@Injectable()
export class QuoteEffects {
  /**
   *
   */
  @Effect()
  quote$: Observable<Action> = this.actions$     // 监听actions数据流
    .ofType(actions.ActionTypes.QUOTE)          // 捕获到QUOTE这个ACTION
    .map(toPayload)
    .switchMap(() => this.quoteService$      // 把service 调用起来。
      .getQuote()
      .map(quote => new actions.QuoteSuccessAction(quote))     // 成功的时候加载成功的action
      .catch(err => of(new actions.QuoteFailAction(JSON.stringify(err))))  // 失败的时候加载失败的action
    );

  /**
   *
   * @param actions$
   * @param quoteService$
   */
  constructor(
    private actions$: Actions,
    private quoteService$: QuoteService
  ) {}
}
