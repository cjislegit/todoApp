const moon = document.getElementById('moon');

const themeChange = () => {
  const root = document.documentElement;

  //Gets the value of the css var --primary-color
  let theme = getComputedStyle(root).getPropertyValue('--primary-color');

  if (theme === ' white') {
    root.style.setProperty('--primary-color', ' black');
  } else {
    root.style.setProperty('--primary-color', ' white');
  }
};

moon.addEventListener('click', themeChange);
