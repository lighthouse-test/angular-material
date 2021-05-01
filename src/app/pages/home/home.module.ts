import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoModule } from '../../components/todo/todo.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TodoModule
  ]
})
export class HomeModule { }
