import * as todoActions from './todo.actions';
import { Todo } from '../models/todo.model';

const initialState: Todo[] = [];

export function todoReducer(state: Todo[] = initialState, action: any): Todo[] {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return [...state, new Todo(action.payload)]; //Spread operator
    default:
      return initialState;
  }
}
