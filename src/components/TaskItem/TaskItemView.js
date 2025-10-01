import { capitalizeWord } from '../../utils/domUtils';
import moreIcon from '../../icons/more.svg';
import checkIcon from '../../icons/check.svg';
import deleteIcon from '../../icons/delete.svg';
import undoIcon from '../../icons/undo.svg';

export default function TaskItemView(taskData) {
  const { title, dueDate, priority, checked } = taskData;
  const priorityLevel = getPriorityClass(priority);

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
        <img src="${undoIcon}" alt="undo icon" />
      </button>
      `
        : ''
    }
    </div>
  `;

  return card;
}

function getPriorityClass(priority) {
  return priority === 'high'
    ? 'card__priority-high'
    : priority === 'medium'
    ? 'card__priority-medium'
    : 'card__priority-low';
}
