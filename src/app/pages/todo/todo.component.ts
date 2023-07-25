import { Component, OnInit } from '@angular/core';
import { sumBy } from 'lodash-es';
import { TodoService } from 'src/app/services/todo.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'Todo';
  imgSrc =
    'https://img.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg?w=2000';

  hasTodo$: Observable<boolean> | undefined;
  // @ts-ignore
  todos$: Observable<Todo[]>;
  length = 0 ;
  // @ts-ignore
  total$: Observable<number>
  destroy$: Subject<null> = new Subject<null>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map((length) => length > 0));
    this.todos$ = this.todoService.todos$;
    this.total$ = this.todoService.todos$.pipe(
      map(todos => sumBy(todos, (o) => o.quantity)),
      takeUntil(this.destroy$)
    )
    this.todoService.length$.pipe(takeUntil(this.destroy$)).subscribe(length => {
      this.length = length;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }


  onEditTodo({ id, quantity }: { id: string, quantity: number }) {
    this.todoService.editTodo({id, quantity});
  }

  onDeleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}
