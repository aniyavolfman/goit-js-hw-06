function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonsEl = document.querySelectorAll('button');
const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');

const sizeArray = [];

const createSize = () => {
  for (let i = 30; i <= 1000; i += 10) {
    sizeArray.push(i);
  }
}

createSize();

const addButtonCreate = buttonsEl[0].addEventListener('click', (event) => {

  const createBoxes = (amount) => {
    
    const elements = [];

    for (let i = 1; i <= amount; i += 1) {
      
      const divEl = document.createElement('div');

      divEl.style.width = `${sizeArray[i-1]}px`;
      divEl.style.height = `${sizeArray[i-1]}px`;
      divEl.style.background = `${getRandomHexColor()}`;
      
      elements.push(divEl);
      
    }

    divBoxesEl.append(...elements);
  }


  createBoxes(Number(inputEl.value));
})

const addButtonDestroy = buttonsEl[1].addEventListener('click', (event) => {

  const destroyBoxes = () => {
    divBoxesEl.textContent = '';
    inputEl.value = '';
  };
  
  destroyBoxes();
})