export default function Header() {
  const headerContainer = document.getElementById('header');
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Todo List</h1>
    <a
      href="https://github.com/Carlosaac23"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://github.com/Carlosaac23.png"
        alt="My profile pic from GitHub"
      />
    </a>
  `;

  headerContainer.appendChild(header);
}
