const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


const addInputEventListener = inputEl.addEventListener('input', (event) => {
    spanEl.textContent = event.currentTarget.value;

    const addDefaultName = () => {
    if (event.currentTarget.value.length === 0) {
    spanEl.textContent = 'Anonymous'};
    }

    addDefaultName();
})

