import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodoComponent } from './todo.component'
import { TodoRoutingModule } from './todo-routing.module'

import { TodoInputComponent } from 'src/app/components/todo-input/todo-input.component'
import { TodoItemComponent } from 'src/app/components/todo-item/todo-item.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [TodoComponent, TodoItemComponent, TodoInputComponent],
  imports: [CommonModule, TodoRoutingModule, SharedModule],
})
export class TodoModule {}
