import TaskDialogView from './TaskDialogView';
import TaskDialogController from './TaskDialogController';

export default function TaskDialog(task) {
  const dialog = TaskDialogView(task);
  document.body.appendChild(dialog);
  dialog.showModal();

  new TaskDialogController(dialog, task);
}
