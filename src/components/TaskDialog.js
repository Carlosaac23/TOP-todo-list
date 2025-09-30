import TasksList from './TasksList';
import EditForm from './EditForm';
import { deleteTask } from '../services/TodoService';
import { formatDate } from '../utils/formatDate';

export default function TaskInfo(task) {
  const { id, title, description, dueDate, priority, checked } = task;

  const dialog = document.createElement('dialog');
  dialog.classList.add('card__dialog');
  dialog.innerHTML = `
    <button id="close-dialog">Close</button>

    <h2>${title}</h2>
    <p>${description}</p>
    <p>${formatDate(dueDate)}</p>
    <p>${priority}</p>
    <input name="${id}_checked" id="${id}_checked" type="checkbox" ${
    checked ? 'checked' : ''
  }>
    <label for="${id}_checked">Completed</label>

    <div class="card__dialog-buttons">
      <button class="dialog__button" id="edit">Edit</button>
      <button class="dialog__button" id="delete">Delete</button>
    </div>
  `;

  document.body.appendChild(dialog);
  dialog.showModal();

  dialog.querySelector('#close-dialog').addEventListener('click', () => {
    dialog.close();
    dialog.remove();
  });

  const deleteBtn = dialog.querySelector('#delete');
  deleteBtn.addEventListener('click', () => {
    deleteTask(id);
    TasksList();
    dialog.close();
    dialog.remove();
  });

  const editBtn = dialog.querySelector('#edit');
  editBtn.addEventListener('click', () => {
    EditForm({ id, title, description, dueDate, priority, checked });
  });
}
