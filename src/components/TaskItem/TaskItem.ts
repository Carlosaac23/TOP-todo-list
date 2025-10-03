import TaskItemView from '@/components/TaskItem/TaskItemView';
import TaskItemController from '@/components/TaskItem/TaskItemController';

export default function TaskItem(
  id: string,
  title: string,
  description: string,
  dueDate: string,
  priority: string,
  checked: boolean
) {
  const taskData = { id, title, description, dueDate, priority, checked };
  const card = TaskItemView(taskData);

  new TaskItemController(card, taskData);
  return card;
}
