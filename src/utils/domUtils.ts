import Toastify from 'toastify-js';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderToast(message: string, type: string) {
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

  const blueStyle = {
    background: '#eff9ff',
    border: '1px solid #0083d4',
    'border-radius': '6px',
    color: '#0083d4',
  };

  Toastify({
    text: message,
    duration: 3000,
    gravity: 'bottom',
    position: 'right',
    style:
      type === 'green' ? greenStyle : type === 'blue' ? blueStyle : redStyle,
  }).showToast();
}

function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export { formatDate, renderToast, capitalizeWord };
