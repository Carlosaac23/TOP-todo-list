import TaskDialogView from './TaskDialogView';
import TaskDialogController from './TaskDialogController';

export default function TaskDialog(task) {
  if (!task) {
    return console.error('There is no task data');
  }

  const dialog = TaskDialogView(task);
  document.body.appendChild(dialog);
  dialog.showModal();

  new TaskDialogController(dialog, task);
}
