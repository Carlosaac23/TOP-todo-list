export default class Task {
  constructor(id, title, description, dueDate, priority, checked = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
  }
}
