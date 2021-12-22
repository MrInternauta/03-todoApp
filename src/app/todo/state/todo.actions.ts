import { Action } from '@ngrx/store';

export const ADD_TODO = '[Todo] Add Todo';
export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public readonly payload: string) {}
}

export type NewActions = AddTodoAction;
