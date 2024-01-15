function createGrid(squareNumber) {
    let columns = squareNumber;
    let rows = squareNumber;

    let grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < columns; ++i) {
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < rows; ++j) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            column.appendChild(cell);

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "black";
            });
        }
        grid.appendChild(column);
    }

    // Remove the existing grid before appending the new one
    const gridContainer = document.getElementById("grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.appendChild(grid);
}

function generateNewGrid() {
    let squareNumber = parseInt(prompt("How many squares per side?"));

    if (window.screen.width <= 1000 && squareNumber > 50) {
        squareNumber = parseInt(prompt("Number should be under 50. Choose a new number."));
    } else if (window.screen.width >= 1001 && squareNumber > 100) {
        squareNumber = parseInt(prompt("Number should be under 100. Choose a new number."));
    }

    createGrid(squareNumber);
}

// Initial grid creation
generateNewGrid();