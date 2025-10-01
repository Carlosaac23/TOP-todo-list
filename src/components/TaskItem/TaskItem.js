import TaskItemView from './TaskItemView';
import TaskItemController from './TaskItemController';

export default function TaskItem(
  id,
  title,
  description,
  dueDate,
  priority,
  checked
) {
  const taskData = { id, title, description, dueDate, priority, checked };
  const card = TaskItemView(taskData);

  new TaskItemController(card, taskData);
  return card;
}
