let container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid gray';
        div.style.boxSizing = 'border-box';
        div.style.flex = `1 0 calc(100% / ${size})`;
        div.style.height = `calc(100% / ${size})`;
        div.style.opacity = '0.1';
        div.dataset.opacity = '0.1';
        container.appendChild(div);
    }

    let grids = document.querySelectorAll('.container div');

    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(grid.dataset.opacity);
            if (currentOpacity < 1.0) {
                let newOpacity = currentOpacity + 0.1;
                grid.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${newOpacity})`;
                grid.style.opacity = newOpacity;
                grid.dataset.opacity = newOpacity;
            }
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