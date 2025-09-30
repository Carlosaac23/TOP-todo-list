function saveToLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

export { saveToLocalStorage };
