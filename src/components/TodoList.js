import TodoItem from './TodoItem';
import { getTasks } from '../services/TodoService';

export default function TodoList() {
  const todoListContainer = document.getElementById('tasks-list');
  const todoList = document.createElement('ul');
  todoList.classList.add('tasks-list');
  todoListContainer.innerHTML = '';
  const tasks = getTasks();

  console.log(tasks);
  tasks.forEach(task => {
    const { title, description, dueDate, priority, checked } = task;

    const item = TodoItem(title, description, dueDate, priority, checked);

    todoList.appendChild(item);
  });

  todoListContainer.appendChild(todoList);
}
