import { Component } from '@angular/core'
import { TodoService } from 'src/app/services/todo.service'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent {
  todoContent = ''
  quantity = 0

  constructor(private todoService: TodoService) {}

  onSubmit() {
    if (this.todoContent.trim() === '') {
      // return false;
      return
    }

    this.todoService.addTodo(this.todoContent, this.quantity)
    this.todoContent = ''
    this.quantity = 0
  }
}
