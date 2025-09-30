import TaskItem from './TaskItem';
import { getTasks } from '../services/TodoService';

export default function TasksList() {
  const todoListContainer = document.getElementById('tasks-list');
  const todoList = document.createElement('ul');
  todoList.classList.add('tasks-list');
  todoListContainer.innerHTML = '';
  const tasks = getTasks();

  console.log(tasks);
  tasks.forEach(task => {
    const { id, title, description, dueDate, priority, checked } = task;

    const item = TaskItem(id, title, description, dueDate, priority, checked);

    todoList.appendChild(item);
  });

  todoListContainer.appendChild(todoList);
}
