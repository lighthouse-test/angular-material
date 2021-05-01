import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  public currentTodo: Partial<Todo> | null = null;
  public todos: Todo[];

  constructor(public todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  addTodoHandler() {
    this.currentTodo = {
      confidential: "No",
      remind: false
    };
  }

  selectTodoHandler(id: number) {
    this.currentTodo = this.todoService.getTodo(id);
  }

  onUpdateTodoHandler(todo: Partial<Todo>) {
    if (!todo.id) {
      this.todoService.addTodo(todo);
    } else {
      this.todoService.updateTodo(<Todo>todo);
    }
    this.currentTodo = null;
    this.todos = this.todoService.getTodos();
  }

  deleteTodoHandler(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
