const moon = document.getElementById('moon');
const desktopFilters = document.getElementById('desktopFilters');
const mobileFilters = document.getElementById('mobileFilters');
const todoCheckbox = document.getElementById('todoList');
const clearCompleted = document.getElementById('clearCompleted');
const todoForm = document.getElementById('todoForm');
const root = document.documentElement;
let todos = [
  { text: 'this is a todo', status: 'active', id: 1 },
  { text: 'this is another todo', status: 'active', id: 2 },
  { text: 'this is an inactive todo', status: 'completed', id: 3 },
];
let activeFilter = 'all';

//Gets the value of the css var --primary-color
let theme = getComputedStyle(root).getPropertyValue('--todo-background-color');

//Changes the CSS vars based on the active theme
const themeChange = () => {
  const icon = document.getElementById('moon');

  if (theme === 'hsl(0, 0%, 98%)' || theme === ' hsl(0, 0%, 98%)') {
    icon.src = './images/icon-sun.svg';
    root.style.setProperty('--todo-background-color', ' hsl(235, 24%, 19%)');
    root.style.setProperty('--body-background-color', ' hsl(235, 21%, 11%)');
    root.style.setProperty('--light-text', ' hsl(233, 14%, 35%)');
    root.style.setProperty('--medium-text', ' hsl(234, 11%, 52%)');
    root.style.setProperty('--dark-text', ' hsl(234, 39%, 85%)');
    backgroundChange();
  } else {
    icon.src = './images/icon-moon.svg';
    root.style.setProperty('--todo-background-color', ' hsl(0, 0%, 98%)');
    root.style.setProperty('--body-background-color', ' hsl(236, 33%, 92%)');
    root.style.setProperty('--light-text', ' hsl(233, 11%, 84%)');
    root.style.setProperty('--medium-text', ' hsl(236, 9%, 61%)');
    root.style.setProperty('--dark-text', ' hsl(235, 19%, 35%)');
    backgroundChange();
  }
};

//Changes background img based on active theme
const backgroundChange = () => {
  if (theme === 'hsl(0, 0%, 98%)' || theme === ' hsl(0, 0%, 98%)') {
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

//Sets the active filster class for desktop
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

//Sets the active filster class for mobile
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

// Filters todos based on the active filter
// const listTodos = () => {
//   const todoContainer = document.getElementById('todoContainer');

//   todoContainer.innerHTML = '';

//   if (activeFilter === 'active' || activeFilter === 'mobileActive') {
//     let activeTodos = todos.filter((todo) => todo.status === 'active');

//     activeTodos.forEach((todo) => {
//       todoContainer.innerHTML += `<div class="todo"><input id="${todo.id}" class="checkbox" type="checkbox" /><div>${todo.text}</div><img id="${todo.id}" class="delete" src="./images/icon-cross.svg" alt="x to delete todo" /></div>`;
//     });
//   } else if (
//     activeFilter === 'completed' ||
//     activeFilter === 'mobileCompleted'
//   ) {
//     let completedTodos = todos.filter((todo) => todo.status === 'completed');

//     completedTodos.forEach((todo) => {
//       todoContainer.innerHTML += `<div id="${todo.id}" class="todo"><input class="checkbox" type="checkbox" checked/><div>${todo.text}</div><img id="${todo.id}" class="delete" src="./images/icon-cross.svg" alt="x to delete todo" /></div>`;
//     });
//   } else {
//     todos.forEach((todo) => {
//       todoContainer.innerHTML += `<div class="todo"><input id="${
//         todo.id
//       }" class="checkbox" type="checkbox" ${
//         todo.status === 'completed' ? 'checked' : ''
//       } /><div>${todo.text}</div><img id="${
//         todo.id
//       }"class="delete" src="./images/icon-cross.svg" alt="x to delete todo" /></div>`;
//     });
//   }
//   updateTodoCounter();
// };

//Sets todo to completed/incompleted when todo is clicked
const todoStatusToggle = (e) => {
  todos.forEach((todo) => {
    if (todo.id == e.target.id) {
      todo.status = todo.status === 'active' ? 'completed' : 'active';
    }
  });
};

//Deletes todo when x icon is clicked
const deleteTodo = (e) => {
  if (e.target.classList[0] === 'delete') {
    todos.forEach((todo) => {
      if (todo.id == e.target.id) {
        todos = todos.filter((item) => item.id != e.target.id);
      }
    });
  }
  listTodos();
};

//Updates the todo counter to reflect active todos
const updateTodoCounter = () => {
  let todoCounter = document.getElementById('todoCounter');
  let todosLeft = 0;

  todos.forEach((todo) => (todo.status === 'active' ? todosLeft++ : null));

  todoCounter.innerHTML = todosLeft;
};

//Delete all completed todos when clear completed is clicked
const clearTodos = () => {
  todos = todos.filter((todo) => todo.status !== 'completed');
  listTodos();
};

//Adds a new todo to the list
const addTodo = (e) => {
  e.preventDefault();
  let newTodoValue = document.getElementById('newTodoValue');
  console.log(newTodoValue.value);
  todos.push({
    text: newTodoValue.value,
    status: 'active',
    id: Math.floor(Math.random() * 1000) + 1,
  });
  newTodoValue.value = '';
  listTodos();
};

moon.addEventListener('click', themeChange);
desktopFilters.addEventListener('click', desktopFilterSelector);
mobileFilters.addEventListener('click', mobileFilterSelector);
todoCheckbox.addEventListener('click', todoStatusToggle);
todoCheckbox.addEventListener('click', deleteTodo);
clearCompleted.addEventListener('click', clearTodos);
todoForm.addEventListener('submit', addTodo);
listTodos();
