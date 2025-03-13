import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';

export interface TaskState {
  tasks: any[];
  error: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({ ...state, error })),
  on(TaskActions.deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  }))
);
