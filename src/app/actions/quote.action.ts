export const QUOTE = 'Quote';
export const QUOTE_SUCCESS = 'Quote Success';
export const QUOTE_FAIL = 'Quote Fail';


import { Action } from '@ngrx/store';
import { Quote } from '../domain/quote.model';
import { type } from '../utils/type.util';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  QUOTE:           type('[Quote] Quote'),
  QUOTE_SUCCESS:  type('[Quote] Quote Success'),
  QUOTE_FAIL:     type('[Quote] Quote Fail')
};

export class QuoteAction implements Action {
  type = ActionTypes.QUOTE;

  constructor(public payload: any) {
  }
}

export class QuoteSuccessAction implements Action {
  type = ActionTypes.QUOTE_SUCCESS;

  constructor(public payload: Quote) {
  }
}

export class QuoteFailAction implements Action {
  type = ActionTypes.QUOTE_FAIL;

  constructor(public payload: string) {
  }
}


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadAction implements Action {
  type = ActionTypes.QUOTE;

  constructor(public payload: Quote) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= QuoteAction
| QuoteSuccessAction
| QuoteFailAction;
// | AnotherAction
