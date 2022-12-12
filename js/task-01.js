const itemArrEl = document.querySelectorAll('.item');

function returnItemNumber() {
    console.log(`Number of categories: ${itemArrEl.length}`);
}

returnItemNumber();


const headerEl = document.querySelectorAll('h2');

function returnHeader() {
    for (const header of headerEl) {
        console.log(`Category: ${header.textContent}`);
        console.log('Elements: ' +  header.nextElementSibling.querySelectorAll('li').length);
    } 
}

returnHeader();

