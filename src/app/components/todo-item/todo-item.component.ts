import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import {
  faMinus,
  faPlus,
  faTrashCan,
  faPenToSquare,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { EProductChange } from 'src/app/enums/todo.enum'
import { ProductType } from 'src/app/interfaces/todo.interface'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() itemIndex = 0
  @Input() item: ProductType = { id: '', label: '', quantity: 0 }
  @Output() edit = new EventEmitter<{ id: string; quantity: number }>()
  @Output() delete = new EventEmitter<string>()

  eProductChange = EProductChange

  // icons
  faPlus = faPlus
  faMinus = faMinus
  faTrashCan = faTrashCan
  faPenToSquare = faPenToSquare
  faCheck = faCheck
  faXmark = faXmark

  quantity = 0
  isEditing = false

  ngOnInit() {
    this.quantity = this.item.quantity
  }

  onQuantityChange(type: EProductChange) {
    if (type === EProductChange.SUBTRACT && this.quantity === 0) return

    if (type === EProductChange.ADD) {
      this.quantity += 1
    } else {
      this.quantity -= 1
    }
  }

  editTodo() {
    this.isEditing = true
  }

  submitTodo() {
    this.isEditing = false
    this.onEdit.emit({ id: this.item.id, quantity: this.quantity })
  }

  removeTodo() {
    this.onDelete.emit(this.item.id)
  }

  cancelSubmit() {
    this.isEditing = false
    this.quantity = this.item.quantity
  }
}
