import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Todo, TodoService } from '../todo.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @ViewChild('table') table!: MatTable<any>;
  public currentEvent!: string;
  public currentTodo: Partial<Todo> | null = null;
  public todos: Todo[];
  public displayedColumns = ['id', 'name', 'description', 'type', 'confidential', 'remind', 'date', 'actions'];

  constructor(
    private _todoService: TodoService,
    public dialog: MatDialog
  ) {
    this.todos = _todoService.getTodos();
  }

  showForm() {
    const dialogRef = this.dialog.open(TodoFormComponent, {
      data: { todo: this.currentTodo }
    });

    dialogRef.afterClosed().subscribe(todo => {
      this.onUpdateTodoHandler(todo);
    });
  }

  addTodoHandler() {
    this.currentEvent = 'edit';
    this.currentTodo = {
      confidential: "No",
      remind: false
    };
    this.showForm();
  }

  selectTodoHandler(id: number, currentEvent: string) {
    this.currentEvent = currentEvent;
    this.currentTodo = this._todoService.getTodo(id);

    if (this.currentTodo && this.currentEvent === 'edit') {
      this.showForm();
    }
  }

  onUpdateTodoHandler(todo: Partial<Todo>) {
    if (!todo.id) {
      this._todoService.addTodo(todo);
    } else {
      this._todoService.updateTodo(<Todo>todo);
    }
    this.currentTodo = null;
    this.todos = this._todoService.getTodos();
    this.table.renderRows();
  }

  deleteTodoHandler(id: number) {
    this._todoService.deleteTodo(id);
    this.todos = this._todoService.getTodos();
    this.table.renderRows();
  }
}
