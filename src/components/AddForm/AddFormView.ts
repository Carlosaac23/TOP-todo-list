export default function AddFormView() {
  const dialog = document.createElement('dialog');
  dialog.classList.add('add__task-dialog');
  dialog.innerHTML = `
    <button id="add__task-close">Close</button>
    <form id="add__task-form">
      <div class="form-row">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>

      <div class="form-row">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="5"></textarea>
      </div>

      <div class="form-row">
        <label for="due-date">Due Date</label>
        <input type="date" name="due-date" id="due-date" />
      </div>

      <fieldset>
        <legend>Priority</legend>

        <input type="radio" name="priority" id="high" value="high" />
        <label for="high">High</label>

        <input
          type="radio"
          name="priority"
          id="medium"
          value="medium"
          checked
        />
        <label for="medium">Medium</label>

        <input type="radio" name="priority" id="low" value="low" />
        <label for="low">Low</label>
      </fieldset>

      <button class="form__add-button">Add</button>
    </form>
  `;

  return dialog;
}
