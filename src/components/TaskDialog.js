import { deleteTask, editTask, getTasks } from '../services/TodoService';
import { formatDate, renderToast, capitalizeWord } from '../utils/domUtils';
import TasksList from './TasksList';
import EditForm from './EditForm';
import editIcon from '../icons/edit.svg';
import deleteIcon from '../icons/delete.svg';
import doneIcon from '../icons/check.svg';

export default function TaskInfo(task) {
  console.log('Desde TaskDialog', task);
  const { id, title, description, dueDate, priority, checked } = task;
  const priorityLevel =
    priority === 'high'
      ? 'card__priority-high'
      : priority === 'medium'
      ? 'card__priority-medium'
      : 'card__priority-low';

  const dialog = document.createElement('dialog');
  dialog.classList.add('card__dialog');
  dialog.innerHTML = `
    <button class="card__dialog-close">Close</button>

    <h2 class="card__dialog-title">${title}</h2>
    <div class="card__dialog-description">${description}</div>
    <p><strong>Due Date:</strong> ${formatDate(dueDate)}</p>
    <p class="card-priority">
      <strong>Priority:</strong>
      <span class="${priorityLevel}">${capitalizeWord(priority)}</span>
    </p>

    <div class="card__dialog-buttons">
      <button class="dialog__button-edit" id="edit">
        <span>Edit</span>
        <img src="${editIcon}" alt="edit icon" />
      </button>
      <button class="dialog__button-delete" id="delete">
        <span>Delete</span>
        <img src="${deleteIcon}" alt="delete icon" />
      </button>
      <button class="dialog__button-done" id="done">
        <span>Done</span>
        <img src="${doneIcon}" alt="check icon" />
      </button>
    </div>
  `;

  document.body.appendChild(dialog);
  dialog.showModal();

  dialog.querySelector('.card__dialog-close').addEventListener('click', () => {
    dialog.close();
    dialog.remove();
  });

  const editBtn = dialog.querySelector('#edit');
  editBtn.addEventListener('click', () => {
    EditForm({ id, title, description, dueDate, priority, checked });

    dialog.close();
    dialog.remove();
  });

  const deleteBtn = dialog.querySelector('#delete');
  deleteBtn.addEventListener('click', () => {
    const deleted = deleteTask(id);

    if (deleted) {
      TasksList();
      renderToast('Task deleted successfully', 'green');
      dialog.close();
      dialog.remove();
    }
  });

  const doneBtn = dialog.querySelector('#done');
  doneBtn.addEventListener('click', () => {
    const tasks = getTasks();
    const task = tasks.find(task => task.id === id);
    task.checked = !task.checked;

    renderToast('¡Task completed!', 'green');
    editTask(task);
    TasksList();
    dialog.close();
    dialog.remove();
  });
}
