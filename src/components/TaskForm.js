import Task from '../models/Task';
import TasksList from './TasksList';
import { addTask } from '../services/TodoService';
import { renderToast } from '../utils/domUtils';

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

    if (taskTitle === '') {
      return renderToast('The title is mandatory', 'red');
    }

    if (taskDescription === '') {
      return renderToast('The description is mandatory', 'red');
    }

    if (taskDueDate === '') {
      return renderToast('The deadline is mandatory', 'red');
    }

    const newTask = new Task(
      id,
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority
    );

    addTask(newTask);
    dialog.close();
    TasksList();
    form.reset();
  });
}
