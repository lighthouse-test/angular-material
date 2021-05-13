import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {
  @Input()
  todo!: Partial<Todo>;

  @Output() onClose = new EventEmitter();

  closeTodoHandler() {
    this.onClose.emit();
  }
}
