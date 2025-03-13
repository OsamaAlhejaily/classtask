import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [FormsModule],
})
export class TaskFormComponent implements OnInit {
  title: string = '';
  description: string = '';
  completed: boolean = false;
  isEditMode: boolean = false; 
  taskId: number | null = null; 

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute, 
    private router: Router 
  ) {}
  onBackClick() {
    this.router.navigate(['/tasks']);
  }
  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.taskId = +params['id']; 
        this.loadTask(this.taskId); 
      }
    });
  }

  
  loadTask(id: number) {
    this.taskService.getTask(id).subscribe(
      (task) => {
        this.title = task.title;
        this.description = task.description;
        this.completed = task.completed;
      },
      (error) => {
        console.error('Error loading task:', error);
      }
    );
  }

  
  error: string | null = null;

  saveTask() {
    const task = {
      id: this.taskId, 
      title: this.title,
      description: this.description,
      completed: this.completed,
    };
  
    if (this.isEditMode && this.taskId !== null) {
      
      this.taskService.updateTask(this.taskId, task).subscribe(
        (response) => {
          console.log('Task updated:', response);
          this.router.navigate(['/tasks']);
        },
        (error) => {
          console.error('Error updating task:', error);
        }
      );
    } else {
      
      this.taskService.addTask(task).subscribe(
        (response) => {
          console.log('Task added:', response);
          this.router.navigate(['/tasks']);
        },
        (error) => {
          console.error('Error adding task:', error);
        }
      );
    }
  }
}