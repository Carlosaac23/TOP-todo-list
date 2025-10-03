import { editTask } from '@/services/TaskServices';
import { renderToast } from '@/utils/domUtils';
import type { TaskType } from '@/types/task';
import TasksList from '@/components/TasksList';

export default class EditFormController {
  dialog: HTMLDialogElement;
  task: TaskType;
  constructor(dialog: HTMLDialogElement, task: TaskType) {
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

  handleSubmit(e: Event) {
    e.preventDefault();

    const updatedTask = {
      id: this.task.id,
      title: (this.dialog.querySelector('#title') as HTMLInputElement).value,
      description: (
        this.dialog.querySelector('#description') as HTMLInputElement
      ).value,
      dueDate: (this.dialog.querySelector('#due-date') as HTMLInputElement)
        .value,
      priority: (
        this.dialog.querySelector(
          'input[name="priority"]:checked'
        ) as HTMLInputElement
      ).value,
      checked: this.task.checked,
    };

    renderToast('Task updated successfully', 'blue');
    editTask(updatedTask);
    TasksList();
    this.closeDialog();
  }
}
