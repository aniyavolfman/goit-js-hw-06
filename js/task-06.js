const inputEl = document.querySelector('input');

const addInputBlur = inputEl.addEventListener('blur', (event) => {

    const input = event.currentTarget;
    
    const checkValue = () => {
        if (input.value.length === Number(input.dataset.length)) {

            input.classList.remove('invalid');
            input.classList.add('valid');
        }
        
        if (input.value.length < Number(input.dataset.length) || input.value.length > Number(input.dataset.length)) {

            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    }

    checkValue();

})
