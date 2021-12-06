import generateNumbers from './generateNumbers.js';

const drawColumns = () => {
    const columnText = document.getElementsByClassName('column-text');
    const evenNumbers = document.getElementById('even-numbers');
    const oddNumbers = document.getElementById('odd-numbers');
    const button = document.getElementById('generate-button');

    button.addEventListener('click', (event) => {
        [...columnText].map(e => e.classList.add('invisible-item'));
        evenNumbers.innerHTML = "";
        oddNumbers.innerHTML = "";

        generateNumbers().map(e => e % 2 ? (oddNumbers.innerHTML += '<p class="generated-number">' + e + '</p>') :
        (evenNumbers.innerHTML += '<p class="generated-number">' + e + '</p>'));

        event.preventDefault();
    });
}

export default drawColumns;
