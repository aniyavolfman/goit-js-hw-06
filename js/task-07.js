const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const addInputEventListener = inputEl.addEventListener('input', (event) => {
    
    const input = event.currentTarget;
    spanEl.style.fontSize = `${input.value}px`;
})


