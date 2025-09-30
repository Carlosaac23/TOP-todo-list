import TaskDialog from './TaskDialog';

export default function TodoItem(...props) {
  const [id, title, description, dueDate, priority, checked] = props;

  const card = document.createElement('li');
  card.classList.add('card');
  card.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <p>${dueDate}</p>
    <p>${priority}</p>
    <input name="${id}_checked" id="${id}_checked" type="checkbox" ${
    checked ? 'checked' : ''
  }>
    <label for="${id}_checked">Completed</label>
    
    <button id="card-button">More...</button>
  `;

  const moreInfoButton = card.querySelector('#card-button');
  moreInfoButton.addEventListener('click', () => {
    TaskDialog({ id, title, description, dueDate, priority, checked });
  });

  return card;
}
