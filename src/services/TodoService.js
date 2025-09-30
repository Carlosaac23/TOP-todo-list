import { saveToLocalStorage } from './StorageService';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function addTask(task) {
  tasks.push(task);
  saveToLocalStorage('tasks', tasks);
}

export function getTasks() {
  return [...tasks];
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveToLocalStorage('tasks', tasks);
}

export function editTask(updatedTask) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const newTasks = tasks.map(task =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveToLocalStorage('tasks', newTasks);
}
