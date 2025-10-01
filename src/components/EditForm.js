import { editTask } from '../services/TodoService';
import { renderToast } from '../utils/domUtils';
import TasksList from './TasksList';

export default function EditForm(task) {
  console.log(task);
  const { id, title, description, dueDate, priority, checked } = task;

  const dialog = document.createElement('dialog');
  dialog.innerHTML = `
    <button id="close-dialog">Close</button>

    <form id="form">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" value="${title}" />

      <label for="decription">Description</label>
      <textarea name="description" id="description">${description}</textarea>

      <label for="due-date">Due Date</label>
      <input type="date" name="due-date" id="due-date" value="${dueDate}" />

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

      <button>Update</button>
    </form>
  `;

  document.body.appendChild(dialog);
  dialog.showModal();

  dialog.querySelector('#close-dialog').addEventListener('click', () => {
    dialog.close();
    dialog.remove();
  });

  dialog.querySelector('#form').addEventListener('submit', e => {
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
