const moon = document.getElementById('moon');
const root = document.documentElement;

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
  let screenWidth = window.innerWidth;
  const heroBackground = document.getElementById('todoHero');

  if (theme === 'hsl(0, 0%, 98%)') {
    if (screenWidth < 600) {
      heroBackground.style.backgroundImage = 'url(./images/bg-mobile-dark.jpg)';
    } else {
      heroBackground.style.backgroundImage =
        'url(./images/bg-desktop-dark.jpg)';
    }
  } else {
    if (screenWidth < 600) {
      heroBackground.style.backgroundImage =
        'url(./images/bg-mobile-light.jpg)';
    } else {
      heroBackground.style.backgroundImage =
        'url(./images/bg-desktop-light.jpg)';
    }
  }
  theme = getComputedStyle(root).getPropertyValue('--todo-background-color');
};

moon.addEventListener('click', themeChange);
