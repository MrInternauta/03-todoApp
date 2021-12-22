import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as fromTodoReducer from '../../todo/state/todo.reducer';
import * as fromTodoActions from '../../todo/state/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;
  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {}

  addTodo() {
    if (!this.txtInput.valid) return;
    this.store.dispatch(new fromTodoActions.AddTodoAction(this.txtInput.value));
    this.txtInput.reset();
  }
}
