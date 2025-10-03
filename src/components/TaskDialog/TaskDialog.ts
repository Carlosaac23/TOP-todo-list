import type { TaskType } from '@/types/task';
import TaskDialogView from '@/components/TaskDialog/TaskDialogView';
import TaskDialogController from '@/components/TaskDialog/TaskDialogController';

export default function TaskDialog(task: TaskType) {
  if (!task) {
    return console.error('There is no task data');
  }

  const dialog = TaskDialogView(task);
  document.body.appendChild(dialog);
  dialog.showModal();

  new TaskDialogController(dialog, task);
}
