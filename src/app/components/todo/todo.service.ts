import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  description: string;
  type: string;
  confidential: string;
  remind: boolean;
  date: string;
}

export const TYPES = [
  'Feature',
  'Docs',
  'Issue',
  'Backend',
  'Frontent'
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[] = [
    { id: 1, name: 'Add more frameworks', description: 'We need to add more frameworks', type: 'Issue', confidential: 'Yes', remind: true, date: '2021-04-07' }
  ];

  getTodos() {
    return this.todos;
  }

  getTodo(id: number) {
    return this.todos.filter(todo => todo.id === id)[0];
  }

  addTodo(todo: Partial<Todo>) {
    todo.id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
    this.todos.push(<Todo>todo);
  }

  deleteTodo(id: number) {
    const todo = this.getTodo(id);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  updateTodo(update: Todo) {
    let todo = this.getTodo(update.id);
    const todos = this.getTodos();
    const index = todos.indexOf(todo);
    todos[index] = update;
  }
}
