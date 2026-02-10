import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TodoItem } from '../../types';

@Component({
  selector: 'app-todo-data-list',
  imports: [],
  templateUrl: './todo-data-list.html',
  styleUrl: './todo-data-list.scss',
})
export class TodoDataList {
  @Input() dataList: TodoItem[] = [];

  @Output() removeEvent = new EventEmitter();

  protected removeItem(id: string) {
    console.log('>>> [search-form] removeItem =>', id);

    this.removeEvent.emit(id);
  }
}
