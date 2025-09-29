import TodoItem from './TodoItem';
import { tasks } from '../services/TodoService';

export default function TodoList() {
  const todoListContainer = document.getElementById('todo-list');
  const todoList = document.createElement('ul');
  console.log(tasks);
  tasks.forEach(task => {
    const { title, description, dueDate, priority, checked } = task;

    const item = TodoItem(title, description, dueDate, priority, checked);

    todoList.appendChild(item);
  });

  todoListContainer.appendChild(todoList);
}
