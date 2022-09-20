const moon = document.getElementById('moon');

const themeChange = () => {
  const root = document.documentElement;
  const icon = document.getElementById('moon');
  const heroBackground = document.getElementsByClassName('todoHero');

  //Gets the value of the css var --primary-color
  let theme = getComputedStyle(root).getPropertyValue(
    '--todo-background-color'
  );

  if (theme === 'hsl(0, 0%, 98%)') {
    icon.src = '/images/icon-sun.svg';
    root.style.setProperty('--todo-background-color', ' hsl(235, 24%, 19%)');
    root.style.setProperty('--body-background-color', ' hsl(235, 21%, 11%)');
    root.style.setProperty('--light-text', ' hsl(233, 14%, 35%)');
    root.style.setProperty('--medium-text', ' hsl(234, 11%, 52%)');
    root.style.setProperty('--dark-text', ' hsl(234, 39%, 85%)');
    heroBackground.style.setProperty(
      'background-image',
      'url(./images/bg-mobile-dark.jpg)'
    );
  } else {
    icon.src = '/images/icon-moon.svg';
    root.style.setProperty('--todo-background-color', ' hsl(0, 0%, 98%)');
    root.style.setProperty('--body-background-color', ' hsl(236, 33%, 92%)');
    root.style.setProperty('--light-text', ' hsl(233, 11%, 84%)');
    root.style.setProperty('--medium-text', ' hsl(236, 9%, 61%)');
    root.style.setProperty('--dark-text', ' hsl(235, 19%, 35%)');
  }
};

moon.addEventListener('click', themeChange);
