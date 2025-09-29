export const tasks = [
  {
    title: 'Titulo 1',
    description: 'Soy una descripcion',
    dueDate: '31/10/2025',
    priority: 'medium',
    checked: false,
  },
  {
    title: 'Titulo 2',
    description: 'Soy una descripcion 2',
    dueDate: '31/12/2025',
    priority: 'low',
    checked: true,
  },
];

class Task {
  constructor(title, description, dueDate, priority, checked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
  }
}

export function addTask(task) {
  tasks.push(task);
}
