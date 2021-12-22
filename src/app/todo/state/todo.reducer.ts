import * as todoActions from './todo.actions';
import { Todo } from '../models/todo.model';

const initialState: Todo[] = [
  {
    id: '1',
    texto: 'Hacer la comora',
    completado: false,
  },

  {
    id: '2',
    texto: 'Limpiar  casa',
    completado: false,
  },
  {
    id: '3',
    texto: 'Ir a gym',
    completado: false,
  },
];

export function todoReducer(state: Todo[] = initialState, action: any): Todo[] {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return [...state, new Todo(action.payload)]; //Spread operator
    default:
      return initialState;
  }
}
