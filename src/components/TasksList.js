import TaskItem from './TaskItem';
import { getTasks } from '../services/TodoService';

export default function TasksList() {
  const tasksContainer = document.getElementById('tasks-container');
  tasksContainer.innerHTML = '';
  const tasks = getTasks();

  console.log(tasks);

  if (tasks.length === 0) {
    tasksContainer.textContent = 'There are no tasks.';
  }

  tasks.forEach(task => {
    const { id, title, description, dueDate, priority, checked } = task;

    const item = TaskItem(id, title, description, dueDate, priority, checked);

    tasksContainer.appendChild(item);
  });
}
