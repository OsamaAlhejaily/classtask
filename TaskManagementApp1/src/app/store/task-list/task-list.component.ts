import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadTasks, deleteTask } from '../task.actions';
import { selectAllTasks, selectTaskError } from '../task.selectors';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule]
})
export class TaskListComponent {
  tasks$;
  error$;

  constructor(private store: Store) { 
    this.tasks$ = this.store.select(selectAllTasks);
    this.error$ = this.store.select(selectTaskError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}
