import { editTask, getTasks, deleteTask } from '../../services/TodoService';
import { renderToast } from '../../utils/domUtils';
import TasksList from '../TasksList';
import TaskDialog from '../TaskDialog/TaskDialog';

export default class TaskItemController {
  constructor(card, taskData) {
    this.card = card;
    this.task = taskData;

    const moreInfoBtn = this.card.querySelector('#more-button');
    const doneBtn = this.card.querySelector('#done-button');
    const deleteBtn = this.card.querySelector('#delete-button');
    const undoBtn = this.card.querySelector('#undo-button');

    if (this.task.checked) {
      moreInfoBtn.disabled = true;
      moreInfoBtn.style.cursor = 'initial';
      doneBtn.disabled = true;
      doneBtn.style.cursor = 'initial';
    }

    if (!this.task.checked) {
      deleteBtn.style.width = '48%';
    }

    this.initializeEventListener(undoBtn);
  }

  initializeEventListener(undoBtn) {
    this.card
      .querySelector('#more-button')
      .addEventListener('click', () => this.handleMore());
    this.card
      .querySelector('#done-button')
      .addEventListener('click', () => this.handleDone());
    this.card
      .querySelector('#delete-button')
      .addEventListener('click', () => this.handleDelete());
    if (undoBtn) {
      this.card
        .querySelector('#undo-button')
        .addEventListener('click', () => this.handleUndo());
    }
  }

  handleMore() {
    TaskDialog(this.task);
  }

  handleDone() {
    const tasks = getTasks();
    const task = tasks.find(task => task.id === this.task.id);
    task.checked = !task.checked;

    renderToast('¡Task completed!', 'green');
    editTask(task);
    TasksList();
  }

  handleDelete() {
    const deleted = deleteTask(this.task.id);
    if (deleted) {
      TasksList();
      renderToast('Task deleted successfully', 'green');
    }
  }

  handleUndo() {
    const tasks = getTasks();
    const task = tasks.find(task => task.id === this.task.id);
    task.checked = !task.checked;

    editTask(task);
    TasksList();
  }
}
