import { saveToLocalStorage } from './StorageService';
import type { TaskType } from '@/types/task';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function addTask(task: TaskType) {
  tasks.push(task);
  saveToLocalStorage('tasks', tasks);
}

export function getTasks() {
  return [...tasks];
}

export function deleteTask(id: string) {
  const question = confirm('Are you sure you want to delete this task?');

  if (question) {
    tasks = tasks.filter((task: TaskType) => task.id !== id);
    saveToLocalStorage('tasks', tasks);
    return true;
  }

  return false;
}

export function editTask(updatedTask: TaskType) {
  tasks = tasks.map((task: TaskType) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveToLocalStorage('tasks', tasks);
}
