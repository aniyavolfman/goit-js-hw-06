const inputEl = document.querySelector('input');

const addInputBlur = inputEl.addEventListener('blur', (event) => {

    const input = event.currentTarget;
    input.classList.add('invalid');
    
    const checkValue = () => {
        if (input.value.length >= Number(input.dataset.length)) {

            input.classList.remove('invalid');
            input.classList.add('valid');
        } 
    }

    checkValue();

})
