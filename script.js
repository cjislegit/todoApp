const moon = document.getElementById('moon');

const themeChange = () => {
  const root = document.documentElement;

  //Gets the value of the css var --primary-color
  let theme = getComputedStyle(root).getPropertyValue('--primary-color');

  if (theme === ' white') {
    root.style.setProperty('--primary-color', ' hsl(235, 24%, 19%)');
    root.style.setProperty('--secondary-color', ' hsl(235, 21%, 11%)');
    root.style.setProperty('--first-text', ' hsl(234, 39%, 85%)');
    root.style.setProperty('--secondary-text', ' hsl(236, 33%, 92%)');
  } else {
    root.style.setProperty('--primary-color', ' white');
    root.style.setProperty('--secondary-color', ' hsl(0, 0%, 98%)');
    root.style.setProperty('--first-text', ' hsl(235, 19%, 35%)');
    root.style.setProperty('--secondary-text', ' hsl(236, 33%, 92%)');
  }
};

moon.addEventListener('click', themeChange);
