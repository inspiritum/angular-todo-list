import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-search-form',
  imports: [
    FormsModule,
  ],
  templateUrl: './todo-search-form.html',
  styleUrl: './todo-search-form.scss',
})
export class TodoSearchForm {
  @Output() submitEvent = new EventEmitter();

  protected query: string = '';

  protected submit(): void {
    const submitQuery = this.query;
    console.log('>>> [search-form] submitQuery =>', submitQuery);

    this.query = '';
    this.submitEvent.emit(submitQuery);
  }
}
