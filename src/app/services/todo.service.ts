import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Todo } from '../models/todo.model'
import { Filter } from '../models/filtering.model'
import { LocalStorageService } from './local-storage.service'
import { findIndex } from 'lodash-es'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private static readonly TodoStorageKey = 'todos'
  private todos: Todo[] = []
  private filteredTodos: Todo[] = []
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  private displayTodosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  private currentFilter: Filter = Filter.All

  todos$: Observable<Todo[]> = this.displayTodosSubject.asObservable()
  length$: Observable<number> = this.lengthSubject.asObservable()

  constructor(private storageService: LocalStorageService) {}

  fetchFromLocalStorage() {
    this.todos = this.storageService.getValue<Todo[]>(TodoService.TodoStorageKey) || []
    this.filteredTodos = [...this.todos.map((todo) => ({ ...todo }))]
    this.updateTodosData()
  }
  updateToLocalStorage() {
    this.storageService.setObject(TodoService.TodoStorageKey, this.todos)
    this.filterTodos(this.currentFilter, false)
    this.updateTodosData()
  }

  addTodo(label: string, quantity: number) {
    const date = new Date(Date.now()).getTime()
    const newTodo = new Todo(date.toString(), label, quantity)
    this.todos.unshift(newTodo)
    this.updateToLocalStorage()
  }

  editTodo(todo: { id: string; quantity: number }) {
    const indexItem = findIndex(this.todos, (o) => o.id === todo.id)
    const _todo = this.todos[indexItem]
    // _todo.label = todo.label;
    _todo.quantity = todo.quantity
    this.todos.splice(indexItem, 1, _todo)
    this.updateToLocalStorage()
  }

  deleteTodo(id: string) {
    const indexItem = findIndex(this.todos, (o) => o.id === id)
    this.todos.splice(indexItem, 1)
    this.updateToLocalStorage()
  }

  filterTodos(filter: Filter, isFiltering = true) {
    this.currentFilter = filter
    switch (filter) {
      case Filter.Active:
        this.filteredTodos = this.todos.filter((todo) => !todo.isCompleted)
        break
      case Filter.Completed:
        this.filteredTodos = this.todos.filter((todo) => todo.isCompleted)
        break
      case Filter.All:
        this.filteredTodos = [...this.todos.map((todo) => ({ ...todo }))]
        break
    }

    if (isFiltering) {
      this.updateTodosData()
    }
  }

  private updateTodosData() {
    this.displayTodosSubject.next(this.filteredTodos)
    this.lengthSubject.next(this.todos.length)
  }
}
