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
  const question = confirm('Are you sure you want to delete this task?');

  if (question) {
    tasks = tasks.filter(task => task.id !== id);
    saveToLocalStorage('tasks', tasks);
    return true;
  }

  return false;
}

export function editTask(updatedTask) {
  tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
  saveToLocalStorage('tasks', tasks);
}
