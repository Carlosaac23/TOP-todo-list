export default function Footer() {
  const ACTUAL_DATE = new Date().getFullYear();

  const footerContainer = document.getElementById('footer');
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>
      <a
        href="https://x.com/Carlosaac23"
        target="_blank"
        rel="noopener noreferrer"
        >Carlos Acosta.</a
      >
      Derechos Reservados ${ACTUAL_DATE}
    </p>
  `;

  footerContainer.appendChild(footer);
}
