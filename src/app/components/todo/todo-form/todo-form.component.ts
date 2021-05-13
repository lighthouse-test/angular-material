import { Component, Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo, TYPES } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo!: Partial<Todo>;

  @ViewChild('form')
  form!: NgForm;

  types = TYPES;

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TodoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { todo: Partial<Todo> }
  ) {
    this.todo = data.todo;
  }

  updateTodoHandler(event: any) {
    event.preventDefault();
    for (const control in this.form.controls) {
      this.form.controls[control].markAsTouched();
    }
    if (this.form.valid) {
      this.dialogRef.close(this.todo);
    } else {
      this._snackBar.open('All fields are required.', undefined, { duration: 5000 });
    }
  }
}
