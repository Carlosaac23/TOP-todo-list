function saveToLocalStorage(name: string, item: string[]) {
  localStorage.setItem(name, JSON.stringify(item));
}

export { saveToLocalStorage };
