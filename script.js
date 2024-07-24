let container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
    }

    let grids = document.querySelectorAll('.container div');

    grids.forEach((grid) => {
        grid.style.border = '1px solid black';
        grid.style.boxSizing = 'border-box';
        grid.style.flex = `1 0 calc(100% / ${size})`;
        grid.style.height = `calc(100% / ${size})`;
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'blue';
        });
    });
}

createGrid(16);

let button = document.querySelector('.change');

button.addEventListener('click', () => {
    let new_size = parseInt(prompt('Put a new size lower than 100 (100 = 100x100)'), 10);

    if (new_size > 0 && new_size <= 100) {
        createGrid(new_size);
    } else {
        alert('Please enter a number between 1 and 99.');
    }
});