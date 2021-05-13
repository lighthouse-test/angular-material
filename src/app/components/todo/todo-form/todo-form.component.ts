import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private _snackBar: MatSnackBar) { }

  updateTodoHandler(event: any) {
    event.preventDefault();
    for (const control in this.form.controls) {
      this.form.controls[control].markAsTouched();
    }
    if (this.form.valid) {
      this.onAddOrUpdate.emit(this.todo);
    } else {
      this._snackBar.open('All fields are required.', undefined, { duration: 5000 });
    }
  }
}
