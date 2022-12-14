const actions = document.querySelectorAll('#counter button');

const counterValueEl = document.querySelector('#value');

let counterValue = 0;

actions[0].addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = String(counterValue);
});

actions[1].addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = String(counterValue);
});