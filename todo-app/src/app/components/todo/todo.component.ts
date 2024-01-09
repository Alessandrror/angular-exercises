import { Component, signal } from '@angular/core';
import { FilterType, Todo } from '../../../types/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
 todoList = signal<Todo[]>([
  {
    id: crypto.randomUUID(),
    title: 'Practice typescript with angular',
    completed: true,
    editing: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Play the 30 days of code',
    completed: false,
    editing: true
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn rust',
    completed: false,
    editing: false
  }
 ])

 filter = signal<FilterType>('all')

 changeFilter(filterString: FilterType) {
  this.filter.set(filterString)
 }

}
