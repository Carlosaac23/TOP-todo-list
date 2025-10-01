import { editTask, getTasks, deleteTask } from '../services/TodoService';
import { renderToast, capitalizeWord } from '../utils/domUtils';
import TaskDialog from './TaskDialog';
import TasksList from './TasksList';
import moreIcon from '../icons/more.svg';
import checkIcon from '../icons/check.svg';
import deleteIcon from '../icons/delete.svg';
import undoIcon from '../icons/undo.svg';

export default function TodoItem(...props) {
  let [id, title, description, dueDate, priority, checked] = props;
  console.log('Desde TaskItem:', props);
  const priorityLevel =
    priority === 'high'
      ? 'card__priority-high'
      : priority === 'medium'
      ? 'card__priority-medium'
      : 'card__priority-low';

  const card = document.createElement('li');
  card.classList.add('card');
  if (checked) card.classList.add('done');
  card.innerHTML = `
    <div id="card-content">
      <h2>${title}</h2>
      <p><strong>Due Date:</strong> ${dueDate}</p>
      <p class="card-priority">
        <strong>Priority:</strong> 
        <span class="${priorityLevel}">${capitalizeWord(priority)}</span>
      </p>

      <div id="card__buttons">
        <button id="more-button">
        <span>More</span>
        <img src="${moreIcon}" alt="more icon" />
        </button>
        <button id="done-button">
          <span>Done</span>
          <img src="${checkIcon}" alt="check icon" />
        </button>
      </div>
    </div>

    <div id="card__buttons-two">
      <button id="delete-button">
      <span>Delete</span>
      <img src="${deleteIcon}" alt="delete icon" />
    </button>
    ${
      checked
        ? `
      <button id="undo-button">
        <span>Undo</span>
        <img src="${undoIcon}" alt="delete icon" />
      </button>
      `
        : ''
    }
    </div>
  `;

  const moreInfoBtn = card.querySelector('#more-button');
  moreInfoBtn.addEventListener('click', () => {
    TaskDialog({ id, title, description, dueDate, priority, checked });
  });

  const doneBtn = card.querySelector('#done-button');
  doneBtn.addEventListener('click', () => {
    const tasks = getTasks();
    const task = tasks.find(task => task.id === id);
    task.checked = !task.checked;

    renderToast('¡Task completed!', 'green');
    editTask(task);
    TasksList();
  });

  if (checked) {
    moreInfoBtn.disabled = true;
    moreInfoBtn.style.cursor = 'initial';
    doneBtn.disabled = true;
    doneBtn.style.cursor = 'initial';
  }

  const deleteBtn = card.querySelector('#delete-button');
  if (!checked) {
    deleteBtn.style.width = '48%';
  }
  deleteBtn.addEventListener('click', () => {
    const deleted = deleteTask(id);

    if (deleted) {
      TasksList();
      renderToast('Task deleted successfully', 'green');
    }
  });

  const undoBtn = card.querySelector('#undo-button');
  if (undoBtn) {
    undoBtn.addEventListener('click', () => {
      const tasks = getTasks();
      const task = tasks.find(task => task.id === id);
      task.checked = !task.checked;

      editTask(task);
      TasksList();
    });
  }

  return card;
}
