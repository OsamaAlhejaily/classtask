import { Routes } from '@angular/router';
import { TaskListComponent } from './store/task-list/task-list.component';
import { TaskFormComponent } from './store/task-form/task-form.component';
const routes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'add-task', component: TaskFormComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
  ];
