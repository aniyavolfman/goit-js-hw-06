function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');


const addButtonChangeColor = buttonEl.addEventListener('click', (event) => {
  
  bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()}`);
  spanEl.textContent = `${getRandomHexColor()}`;
  
})