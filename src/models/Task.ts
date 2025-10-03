export default class Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  checked: boolean;
  constructor(
    id: string,
    title: string,
    description: string,
    dueDate: string,
    priority: string,
    checked: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
  }
}
