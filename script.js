const moon = document.getElementById('moon');
const desktopFilters = document.getElementById('desktopFilters');
const mobileFilters = document.getElementById('mobileFilters');
const todoCheckbox = document.getElementById('todoList');
const root = document.documentElement;
const todos = [
  { text: 'this is a todo', status: 'active', id: 1 },
  { text: 'this is another todo', status: 'active', id: 2 },
  { text: 'this is an inactive todo', status: 'completed', id: 3 },
];
let activeFilter = 'all';

//Gets the value of the css var --primary-color
let theme = getComputedStyle(root).getPropertyValue('--todo-background-color');

const themeChange = () => {
  const icon = document.getElementById('moon');

  if (theme === 'hsl(0, 0%, 98%)') {
    icon.src = '/images/icon-sun.svg';
    root.style.setProperty('--todo-background-color', ' hsl(235, 24%, 19%)');
    root.style.setProperty('--body-background-color', ' hsl(235, 21%, 11%)');
    root.style.setProperty('--light-text', ' hsl(233, 14%, 35%)');
    root.style.setProperty('--medium-text', ' hsl(234, 11%, 52%)');
    root.style.setProperty('--dark-text', ' hsl(234, 39%, 85%)');
    backgroundChange();
  } else {
    icon.src = '/images/icon-moon.svg';
    root.style.setProperty('--todo-background-color', ' hsl(0, 0%, 98%)');
    root.style.setProperty('--body-background-color', ' hsl(236, 33%, 92%)');
    root.style.setProperty('--light-text', ' hsl(233, 11%, 84%)');
    root.style.setProperty('--medium-text', ' hsl(236, 9%, 61%)');
    root.style.setProperty('--dark-text', ' hsl(235, 19%, 35%)');
    backgroundChange();
  }
};

const backgroundChange = () => {
  if (theme === 'hsl(0, 0%, 98%)') {
    root.style.setProperty('--mobile-hero', 'url(./images/bg-mobile-dark.jpg)');
    root.style.setProperty(
      '--desktop-hero',
      'url(./images/bg-desktop-dark.jpg)'
    );
  } else {
    root.style.setProperty(
      '--mobile-hero',
      'url(./images/bg-mobile-light.jpg)'
    );
    root.style.setProperty(
      '--desktop-hero',
      'url(./images/bg-desktop-light.jpg)'
    );
  }
  theme = getComputedStyle(root).getPropertyValue('--todo-background-color');
};

const desktopFilterSelector = (e) => {
  let allFilters = document.querySelectorAll('.filters');
  activeFilter = e.target.id;

  allFilters.forEach((filter) => {
    if (filter.id === e.target.id) {
      filter.classList.add('activeFilter');
    } else {
      filter.classList.remove('activeFilter');
    }
  });
  listTodos();
};

const mobileFilterSelector = (e) => {
  let allFilters = document.querySelectorAll('.mobileFilters');
  activeFilter = e.target.id;

  allFilters.forEach((filter) => {
    if (filter.id === e.target.id) {
      filter.classList.add('activeFilter');
    } else {
      filter.classList.remove('activeFilter');
    }
  });
};

const listTodos = () => {
  const todoContainer = document.getElementById('todoContainer');

  todoContainer.innerHTML = '';

  if (activeFilter === 'active' || activeFilter === 'mobileActive') {
    let activeTodos = todos.filter((todo) => todo.status === 'active');

    activeTodos.forEach((todo) => {
      todoContainer.innerHTML += `<div class="todo"><input id="${todo.id}" class="checkbox" type="checkbox" /><div>${todo.text}</div><img class="delete" src="/images/icon-cross.svg" alt="x to delete todo" /></div>`;
    });
  } else if (
    activeFilter === 'completed' ||
    activeFilter === 'mobileCompleted'
  ) {
    let completedTodos = todos.filter((todo) => todo.status === 'completed');

    completedTodos.forEach((todo) => {
      todoContainer.innerHTML += `<div id="${todo.id}" class="todo"><input class="checkbox" type="checkbox" checked/><div>${todo.text}</div><img class="delete" src="/images/icon-cross.svg" alt="x to delete todo" /></div>`;
    });
  } else {
    todos.forEach((todo) => {
      todoContainer.innerHTML += `<div class="todo"><input id="${
        todo.id
      }" class="checkbox" type="checkbox" ${
        todo.status === 'completed' ? 'checked' : ''
      } /><div>${
        todo.text
      }</div><img class="delete" src="/images/icon-cross.svg" alt="x to delete todo" /></div>`;
    });
  }
};

const todoStatusToggle = (e) => {
  todos.forEach((todo) => {
    if (todo.id == e.target.id) {
      todo.status = todo.status === 'active' ? 'completed' : 'active';
    }
  });
};

moon.addEventListener('click', themeChange);
desktopFilters.addEventListener('click', desktopFilterSelector);
mobileFilters.addEventListener('click', mobileFilterSelector);
todoCheckbox.addEventListener('click', todoStatusToggle);
listTodos();
