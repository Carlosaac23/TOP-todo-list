import { addTask } from '@/services/TaskServices';
import { renderToast } from '@/utils/domUtils';
import Task from '@/models/Task';
import TasksList from '@/components/TasksList';

export default class AddFormController {
  dialog: HTMLDialogElement;
  constructor(dialog: HTMLDialogElement) {
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
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const taskTitle = (this.dialog.querySelector('#title') as HTMLInputElement)
      .value;
    const taskDescription = (
      this.dialog.querySelector('#description') as HTMLInputElement
    ).value;
    const taskDueDate = (
      this.dialog.querySelector('#due-date') as HTMLInputElement
    ).value;
    const taskPriority = (
      this.dialog.querySelector(
        'input[name="priority"]:checked'
      ) as HTMLInputElement
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
    (this.dialog.querySelector('#add__task-form') as HTMLFormElement).reset();
  }
}
