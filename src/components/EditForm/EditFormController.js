import { editTask } from '../../services/TodoService';
import { renderToast } from '../../utils/domUtils';
import TasksList from '../TasksList';

export default class EditFormController {
  constructor(dialog, task) {
    this.dialog = dialog;
    this.task = task;
    document.body.appendChild(this.dialog);
    this.dialog.showModal();

    this.initializeEventListener();
  }

  initializeEventListener() {
    this.dialog
      .querySelector('#edit__close-dialog')
      .addEventListener('click', () => this.closeDialog());
    this.dialog
      .querySelector('#edit__form-form')
      .addEventListener('submit', e => this.handleSubmit(e));
  }

  closeDialog() {
    this.dialog.close();
    this.dialog.remove();
  }

  handleSubmit(e) {
    e.preventDefault();

    const updatedTask = {
      id: this.task.id,
      title: this.dialog.querySelector('#title').value,
      description: this.dialog.querySelector('#description').value,
      dueDate: this.dialog.querySelector('#due-date').value,
      priority: this.dialog.querySelector('input[name="priority"]:checked')
        .value,
      checked: this.task.checked,
    };

    renderToast('Task updated successfully', 'blue');
    editTask(updatedTask);
    TasksList();
    this.closeDialog();
  }
}
