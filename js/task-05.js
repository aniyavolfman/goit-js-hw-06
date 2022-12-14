const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


const addInputEventListener = inputEl.addEventListener('input', (event) => {
    const input = event.currentTarget;
    spanEl.textContent = input.value;

    const addDefaultName = () => {
    if (input.value.length === 0) {
    spanEl.textContent = 'Anonymous'};
    }

    addDefaultName();
})

