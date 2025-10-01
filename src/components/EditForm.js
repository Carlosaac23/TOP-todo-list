import { editTask } from '../services/TodoService';
import { renderToast } from '../utils/domUtils';
import TasksList from './TasksList';

export default function EditForm(task) {
  const { id, title, description, dueDate, priority, checked } = task;

  const dialog = document.createElement('dialog');
  dialog.classList.add('edit__form');
  dialog.innerHTML = `
    <button id="edit__close-dialog">Close</button>

    <form id="edit__form-form">
      <div class="form-row">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="${title}" />
      </div>

      <div class="form-row">
        <label for="decription">Description</label>
        <textarea name="description" id="description" rows="5">${description}</textarea>
      </div>

      <div class="form-row">
        <label for="due-date">Due Date</label>
        <input type="date" name="due-date" id="due-date" value="${dueDate}" />
      </div>

      <fieldset>
        <legend>Priority</legend>

        <input
          type="radio"
          name="priority"
          id="high-${id}"
          value="high"
          ${priority === 'high' ? 'checked' : ''}
        />
        <label for="high-${id}">High</label>

        <input
          type="radio"
          name="priority"
          id="medium-${id}"
          value="medium"
          ${priority === 'medium' ? 'checked' : ''}
        />
        <label for="medium-${id}">Medium</label>

        <input
          type="radio"
          name="priority"
          id="low-${id}"
          value="low"
          ${priority === 'low' ? 'checked' : ''}
        />
        <label for="low-${id}">Low</label>
      </fieldset>

      <button class="edit__form-button">Update</button>
    </form>
  `;

  document.body.appendChild(dialog);
  dialog.showModal();

  dialog.querySelector('#edit__close-dialog').addEventListener('click', () => {
    dialog.close();
    dialog.remove();
  });

  dialog.querySelector('#edit__form-form').addEventListener('submit', e => {
    e.preventDefault();

    const updatedTask = {
      id,
      title: dialog.querySelector('#title').value,
      description: dialog.querySelector('#description').value,
      dueDate: dialog.querySelector('#due-date').value,
      priority: dialog.querySelector('input[name="priority"]:checked').value,
      checked,
    };

    renderToast('Task updated successfully', 'blue');
    editTask(updatedTask);
    TasksList();
    dialog.close();
    dialog.remove();
  });
}
