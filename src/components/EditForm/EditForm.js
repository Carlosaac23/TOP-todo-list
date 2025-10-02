import EditFormView from './EditFormView';
import EditFormController from './EditFormController';

export default function EditForm(task) {
  const editDialog = EditFormView(task);

  new EditFormController(editDialog, task);
}
