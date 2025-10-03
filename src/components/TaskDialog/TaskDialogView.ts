import { formatDate, capitalizeWord } from '@/utils/domUtils';
import type { TaskType } from '@/types/task';
import editIcon from '@/icons/edit.svg';
import deleteIcon from '@/icons/delete.svg';
import doneIcon from '@/icons/check.svg';

export default function TaskDialogView(task: TaskType) {
  if (!task) {
    throw new Error('TaskDialogView: No task data');
  }

  const { title, description, dueDate, priority } = task;
  const priorityLevel = getPriorityClass(priority);

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

  return dialog;
}

function getPriorityClass(priority: string) {
  return priority === 'high'
    ? 'card__priority-high'
    : priority === 'medium'
    ? 'card__priority-medium'
    : 'card__priority-low';
}
