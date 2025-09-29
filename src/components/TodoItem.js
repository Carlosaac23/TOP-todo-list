export default function TodoItem(...props) {
  const [title, description, dueDate, priority, checked] = props;

  const card = document.createElement('div');
  card.textContent = `${title} ${description}`;

  return card;
}
