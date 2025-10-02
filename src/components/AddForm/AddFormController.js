import { addTask } from '../../services/TaskServices';
import { renderToast } from '../../utils/domUtils';
import Task from '../../models/Task';
import TasksList from '../TasksList';

export default class AddFormController {
  constructor(dialog) {
    this.dialog = dialog;
    const addTaskBtn = document.getElementById('add__task-button');
    const closeDialog = document.getElementById('add__task-close');

    addTaskBtn.addEventListener('click', () => this.showDialog());
    closeDialog.addEventListener('click', () => this.closeDialog());

    this.initializeEventListener();
  }

  initializeEventListener() {
    this.dialog
      .querySelector('#add__task-form')
      .addEventListener('submit', e => this.handleSubmit(e));
  }

  showDialog() {
    this.dialog.showModal();
  }

  closeDialog() {
    this.dialog.close();
    this.dialog.remove();
  }

  handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const taskTitle = this.dialog.querySelector('#title').value;
    const taskDescription = this.dialog.querySelector('#description').value;
    const taskDueDate = this.dialog.querySelector('#due-date').value;
    const taskPriority = this.dialog.querySelector(
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

    renderToast('Task created successfully', 'green');
    addTask(newTask);
    this.closeDialog();
    TasksList();
    this.dialog.querySelector('#add__task-form').reset();
  }
}
