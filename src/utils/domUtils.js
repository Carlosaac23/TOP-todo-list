import Toastify from 'toastify-js';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderToast(message, type) {
  const redStyle = {
    background: '#fff1f1',
    border: '1px solid #ed1515',
    'border-radius': '6px',
    color: '#ed1515',
  };

  const greenStyle = {
    background: '#eeffef',
    border: '1px solid #00a720',
    'border-radius': '6px',
    color: '#00a720',
  };

  Toastify({
    text: message,
    duration: 4000,
    gravity: 'bottom',
    position: 'right',
    style: type === 'green' ? greenStyle : redStyle,
  }).showToast();
}

export { formatDate, renderToast };
