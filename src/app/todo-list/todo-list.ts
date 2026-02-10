import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoDataList, TodoSearchForm } from './components';
import { TodoItem } from './types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
  imports: [
    TodoSearchForm,
    TodoDataList
  ],
})
export class TodoList {
  protected todoList: TodoItem[] = [];

  protected addNewTodo(todoText: string): void {
    console.log('>>> [todo-list] addNewTodo =>', todoText);

    const todoItem: TodoItem = {
      id: `id-${Date.now()}`,
      text: todoText
    }

    this.todoList.push(todoItem);

    console.log('>>> [todo-list] todoTasks =>', this.todoList);
  }

  protected removeTodo(idForRemoving: string): void {
    console.log('>>> [todo-list] todoId =>', idForRemoving);

    this.todoList = this.todoList.filter(
      (todoItem: TodoItem) => todoItem.id !== idForRemoving
    );

    console.log('>>> [todo-list] todoTasks =>', this.todoList);
  }
}
