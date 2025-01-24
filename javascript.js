document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid');
    const resizeButton = document.getElementById('resize');
        
    function createGrid(size) {
        gridContainer.innerHTML = '';
        const squareSize = 100 / size;

        for (let i=0; i < size * size; i++) {
            const square = document.createElement('div');
            square.style.flex = `0 0 calc(${squareSize}% - 2px)`;
            square.style.height = `calc(${squareSize}% - 2px)`;
                
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = '#3498db';
                });

                gridContainer.appendChild(square);
        }
    }

    resizeButton.addEventListener('click', () => {
        const newSize = parseInt(prompt('Enter the number of squares per side for the new grid:'), 10);
        
        if (newSize > 0 && newSize <=100) {
            createGrid(newSize);
        }
    });

    createGrid(16);
})