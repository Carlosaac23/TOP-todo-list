export default function TodoItem(...props) {
  const [title, description, dueDate, priority, checked] = props;

  const card = document.createElement('li');
  card.classList.add('card');
  card.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <p>${dueDate}</p>
    <p>${priority}</p>
    
  `;

  return card;
}
