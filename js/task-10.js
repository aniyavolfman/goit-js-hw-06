function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonsEl = document.querySelectorAll('button');
const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');


const addButtonCreate = buttonsEl[0].addEventListener('click', (event) => {

  const createBoxes = (amount) => {
    
    const elements = [];

    for (let i = 1; i <= amount; i += 1) {
      
      const divEl = document.createElement('div');
      
      divEl.style.background = `${getRandomHexColor()}`;
      divEl.classList.add('box');
      
      elements.push(divEl);
    }

    

    divBoxesEl.append(...elements);

    const divBoxEl = document.querySelectorAll('.box');

    if (divBoxEl.length > 0) {

      divBoxEl[0].style.width = '30px';
      divBoxEl[0].style.height = '30px';

      for (let i = 1; i < divBoxEl.length; i += 1){
      
      divBoxEl[i].style.width = `${Number.parseInt(divBoxEl[i - 1].style.width) + 10}px`;
      divBoxEl[i].style.height = `${Number.parseInt(divBoxEl[i - 1].style.height) + 10}px`;
      
    }
    }

    
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