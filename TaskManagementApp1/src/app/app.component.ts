import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { TaskListComponent } from './store/task-list/task-list.component';
import { TaskFormComponent } from './store/task-form/task-form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = ''
}
