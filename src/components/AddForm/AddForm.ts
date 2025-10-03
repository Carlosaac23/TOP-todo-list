import AddFormView from '@/components/AddForm/AddFormView';
import AddFormController from '@/components/AddForm/AddFormController';

export default function AddForm() {
  const form = AddFormView();
  document.body.appendChild(form);
  new AddFormController(form);
}
