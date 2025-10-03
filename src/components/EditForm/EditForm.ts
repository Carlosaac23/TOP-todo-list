import type { TaskType } from '@/types/task';
import EditFormView from '@/components/EditForm/EditFormView';
import EditFormController from '@/components/EditForm/EditFormController';

export default function EditForm(task: TaskType) {
  const editDialog = EditFormView(task);

  new EditFormController(editDialog, task);
}
