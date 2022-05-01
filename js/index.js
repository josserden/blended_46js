const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  },
});
const formRef = document.querySelector('.js-form');
const cardList = document.querySelector('.js-card-list');

const todos = [];

formRef.addEventListener('submit', onSubmit);
cardList.addEventListener('click', deleteTodo);
cardList.addEventListener('click', onToggleTodo);

function onSubmit(event) {
  event.preventDefault();

  const title = formRef.elements.title.value.trim();
  const task = formRef.elements.task.value.trim();

  if (!title || !task) return notyf.error('Please fill in all fields');

  const todo = {
    title,
    task,
    id: todos.length + 1,
  };

  todos.push(todo);
  formRef.reset();
  notyf.success('Todo added');

  renderMarkup();

  // if (title && task) {
  //   const todo = {
  //     title,
  //     task,
  //     id: todos.length + 1,
  //   };

  //   todos.push(todo);
  // formRef.reset();
  // notyf.success('Todo added');

  //   console.log(todos);
  // }

  // return notyf.error('Please fill in all fields');
}

function deleteTodo(event) {
  const { id } = event.target.dataset;

  if (id) {
    const todo = todos.find((todo) => todo.id === id);
    todos.splice(todos.indexOf(todo), 1);

    renderMarkup();
    notyf.success('Todo deleted');
  }
}

function onToggleTodo(event) {
  const parentElement = event.target.parentNode.parentNode.parentNode;

  event.target.checked
    ? parentElement.classList.add('bg-success')
    : parentElement.classList.remove('bg-success');
}

function renderMarkup() {
  cardList.innerHTML = '';

  const markup = todos
    .map(
      ({ id, title, task }) =>
        `<div class="col card w-50">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${task}</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  data-state="check"
                />
                <span class="form-check-label" >
                  Completed
                </span>
              </div>
              <button type="button" class="btn btn-primary" data-id="${id}">
                Delete
              </button>
            </div>
          </div>
        `
    )
    .join('');

  cardList.insertAdjacentHTML('beforeend', markup);
}
