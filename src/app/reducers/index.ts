import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// 下面这个模块其实就是redux中的store
import { StoreModule, combineReducers, ActionReducer } from '@ngrx/store';
// 为路由提供的store，它把每次路由的变化做了一次存储。
import { RouterStoreModule } from '@ngrx/router-store';
// 开发者工具要用到的。
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { AppStoreComponent }  from './app.component';

// import { routes } from './routes';
import * as fromQuote from './quote.reducer';
import * as fromAuth from './auth.reducer';
import { compose } from '@ngrx/core/compose';
/**
 * storeFreeze 用于防止 state 被修改，在 Redux 中我们必须确保 state 是不可更改的，这个函数
 * 有助于帮我们检测 state 是否被有意或无意的修改了。当 state 发生修改时，会抛出一个异常，这一点
 * 在开发时非常有帮助。根据环境变量的值，发布时会不包含这个函数。
 */
import {storeFreeze} from 'ngrx-store-freeze';

import {environment} from '../../environments/environment';
import {createSelector} from 'reselect';
import {Auth} from '../domain/auth.model';


// 应用层面的全局的state，应该包含下面所有的state。
export interface State {
  quote: fromQuote.State;
  auth: Auth;
}

// 全局的初始值， 所有state的初始值
const initialState: State = {
  quote: fromQuote.initialState,
  auth: fromAuth.initialState,
};

// 建立reducer字典，包含所有分支的。
const reducers = {
  quote: fromQuote.reducer,
  auth: fromAuth.reducer,
};

/**
 * 使用 combineReducers 把所有子 reducer 合并产生一个顶级 reducer
 */
const productionReducers: ActionReducer<State> = combineReducers(reducers);

const developmentReducers: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

// 根据开发环境的不同，返回不同的reducer，然后放到StoreModule中去。
export function reducer(state = initialState, action: any ): State {
  return environment.production ? productionReducers(state, action) : developmentReducers(state, action);
  // return developmentReducers(state, action);
}

export const getAuthState = (state: State) => state.auth;
export const getQuoteState = (state: State) => state.quote;


// 除了最后一个，其它的都是输入型参数。当成最后一个函数的参数，
export const getQuote = createSelector(getQuoteState, fromQuote.getQuote);



@NgModule({
  // declarations: [ AppStoreComponent ],
  imports: [
    // BrowserModule,
    // RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  // providers: [],
  // bootstrap: [ AppStoreComponent ]
})
export class AppStoreModule {}
