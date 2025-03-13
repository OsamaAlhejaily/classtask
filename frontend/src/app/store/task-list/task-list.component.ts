import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadTasks, deleteTask } from '../task.actions';
import { selectAllTasks, selectTaskError } from '../task.selectors';
import { Router } from '@angular/router';
import { TaskService } from '../task-service/task.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule,FormsModule]
})
export class TaskListComponent {
  tasks$;
  error$;
  newTask = {
    title: '',
    description: '',
    completed: false,
  };
  constructor(private store: Store,private router: Router,private taskService: TaskService) { 
    this.tasks$ = this.store.select(selectAllTasks);
    this.error$ = this.store.select(selectTaskError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
  editTask(task: any) {
    this.router.navigate(['/edit-task', task.id]);
  }
  addNewTask() {
    if (this.newTask.title.trim()) {
      this.taskService.addTask(this.newTask).subscribe(
        (response) => {
          console.log('Task added:', response);
          this.store.dispatch(loadTasks()); 
          this.newTask = { title: '', description: '', completed: false }; 
        },
        (error) => {
          console.error('Error adding task:', error);
        }
      );
    }
  }
}
