import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo, TYPES } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input()
  todo!: Partial<Todo>;

  @Output() onAddOrUpdate = new EventEmitter<Partial<Todo>>();

  @ViewChild('form')
  form!: NgForm;

  types = TYPES;

  updateTodoHandler(event: any) {
    event.preventDefault();
    for (const control in this.form.controls) {
      this.form.controls[control].markAsTouched();
    }
    if (this.form.valid) {
      this.onAddOrUpdate.emit(this.todo);
    } else {
      alert("All fields are required.");
    }
  }
}
