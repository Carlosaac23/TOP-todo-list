export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function addTask(task) {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasks() {
  return [...tasks];
}

export function deleteTask(id) {
  tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
