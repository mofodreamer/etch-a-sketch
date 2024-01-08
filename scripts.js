let columns = 4;
let rows = 4;

let grid = document.createElement('div');            // creates grid
grid.className = 'grid';
for (let i = 0; i < columns; ++i) {
    let column = document.createElement('div');      // creates column
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
        let cell = document.createElement('div');    // creates cell
        cell.className = 'cell';
        column.appendChild(cell);                  // appends cell to column (as row)
    }
    grid.appendChild(column);                        // appends column to grid
}
document.getElementById("grid-container").appendChild(grid);                     // appends grid to webpage
