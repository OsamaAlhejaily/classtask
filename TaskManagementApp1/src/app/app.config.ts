import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { TaskListComponent } from './store/task-list/task-list.component';
import { TaskFormComponent } from './store/task-form/task-form.component';
import { TaskService } from './store/task-service/task.service';
import { taskReducer } from './store/task.reducer';
import { TaskEffects } from './store/task.effects';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), 
    provideStore({ tasks: taskReducer }),
    provideEffects([TaskEffects]),TaskService,FormsModule,FormsModule,
  ]
};
