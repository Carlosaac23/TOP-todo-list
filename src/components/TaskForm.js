import Task from '../models/Task';
import TasksList from './TasksList';
import Toastify from 'toastify-js';
import { addTask } from '../services/TodoService';

export default function TaskForm() {
  const addTaskBtn = document.getElementById('add-task');
  const closeDialog = document.getElementById('close-btn');
  const dialog = document.getElementById('dialog');
  const form = document.getElementById('form');

  addTaskBtn.addEventListener('click', () => {
    dialog.showModal();
  });

  closeDialog.addEventListener('click', () => {
    dialog.close();
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const id = crypto.randomUUID();

    const taskTitle = form.querySelector('#title').value;
    const taskDescription = form.querySelector('#description').value;
    const taskDueDate = form.querySelector('#due-date').value;
    const taskPriority = form.querySelector(
      'input[name="priority"]:checked'
    ).value;

    const newTask = new Task(
      id,
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority
    );

    Toastify({
      text: 'Task added successfully',
      duration: 4000,
      gravity: 'bottom',
      position: 'right',
      style: {
        background: '#eeffef',
        border: '1px solid #003308',
        'border-radius': '6px',
        color: '#003308',
      },
    }).showToast();

    addTask(newTask);
    dialog.close();
    TasksList();
    form.reset();
  });
}
