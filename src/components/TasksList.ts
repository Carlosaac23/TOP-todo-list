import { getTasks } from '@/services/TaskServices';
import type { TaskType } from '@/types/task';
import TaskItem from '@/components/TaskItem/TaskItem';

export default function TasksList() {
  const tasksContainer = document.getElementById('tasks-container');
  tasksContainer.innerHTML = '';
  const tasks = getTasks();

  if (tasks.length === 0) {
    tasksContainer.textContent = 'There are no tasks.';
  }

  tasks.forEach((task: TaskType) => {
    const { id, title, description, dueDate, priority, checked } = task;

    const item = TaskItem(id, title, description, dueDate, priority, checked);

    tasksContainer.appendChild(item);
  });
}
