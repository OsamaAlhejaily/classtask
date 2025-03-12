import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TaskService } from '../task-service/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [FormsModule] 
})
export class TaskFormComponent {
  title: string = ''; 

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title.trim()) {
      const newTask = { title: this.title, completed: false };

      this.taskService.addTask(newTask).subscribe(
        response => {
          console.log('Task added:', response);
          this.title = ''; 
        },
        error => {
          console.error('Error adding task:', error);
        }
      );
    }
  }
}
