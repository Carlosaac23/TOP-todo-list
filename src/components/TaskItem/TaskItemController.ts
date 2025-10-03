import { editTask, getTasks, deleteTask } from '@/services/TaskServices';
import { renderToast } from '@/utils/domUtils';
import type { TaskType } from '@/types/task';
import TasksList from '@/components/TasksList';
import TaskDialog from '@/components/TaskDialog/TaskDialog';

export default class TaskItemController {
  private card: HTMLLIElement;
  private task: TaskType;

  constructor(card: HTMLLIElement, taskData: TaskType) {
    this.card = card;
    this.task = taskData;

    const moreInfoBtn = this.card.querySelector(
      '#more-button'
    ) as HTMLButtonElement;
    const doneBtn = this.card.querySelector(
      '#done-button'
    ) as HTMLButtonElement;
    const deleteBtn = this.card.querySelector(
      '#delete-button'
    ) as HTMLButtonElement;
    const undoBtn = this.card.querySelector(
      '#undo-button'
    ) as HTMLButtonElement;

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

  initializeEventListener(undoBtn: Element) {
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
    const task = tasks.find((task: TaskType) => task.id === this.task.id);
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
    const task = tasks.find((task: TaskType) => task.id === this.task.id);
    task.checked = !task.checked;

    editTask(task);
    TasksList();
  }
}
