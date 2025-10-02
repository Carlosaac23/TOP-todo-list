import AddFormView from './AddFormView';
import AddFormController from './AddFormController';

export default function AddForm() {
  const form = AddFormView();
  document.body.appendChild(form);
  new AddFormController(form);
}
