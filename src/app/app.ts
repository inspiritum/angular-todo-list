import { Component } from '@angular/core';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TodoList]
})
export class App {
  protected readonly title = 'frontend-angular-project-first-step';
}
