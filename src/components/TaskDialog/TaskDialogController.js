import { deleteTask, editTask, getTasks } from '../../services/TodoService';
import { renderToast } from '../../utils/domUtils';
import TasksList from '../TasksList';
import EditForm from '../EditForm';

export default class TaskDialogController {
  constructor(dialog, task) {
    this.dialog = dialog;
    console.log(task);
    this.task = task;
    this.initializeEventListener();
  }

  initializeEventListener() {
    this.dialog
      .querySelector('.card__dialog-close')
      .addEventListener('click', () => this.closeDialog());
    this.dialog
      .querySelector('#edit')
      .addEventListener('click', () => this.handleEdit());
    this.dialog
      .querySelector('#delete')
      .addEventListener('click', () => this.handleDelete());
    this.dialog
      .querySelector('#done')
      .addEventListener('click', () => this.handleDone());
  }

  closeDialog() {
    this.dialog.close();
    this.dialog.remove();
  }

  handleEdit() {
    EditForm(this.task);
    this.closeDialog();
  }

  handleDelete() {
    const deleted = deleteTask(this.task.id);
    if (deleted) {
      TasksList();
      renderToast('Task deleted successfully', 'green');
      this.closeDialog();
    }
  }

  handleDone() {
    const tasks = getTasks();
    const task = tasks.find(task => task.id === this.task.id);
    task.checked = !task.checked;

    renderToast('¡Task completed!', 'green');
    editTask(task);
    TasksList();
    this.closeDialog();
  }
}
