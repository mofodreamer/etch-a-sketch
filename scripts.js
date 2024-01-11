squareNumber=prompt ("How many squares per side?")
if (window.screen.width   <= 1000 && squareNumber > 51) {
    prompt("Number should be under 50. Choose a new number.");
} else if (window.screen.width  >= 1001 && squareNumber > 101) {
    prompt("Number should be under 100. Choose a new number.");
}

let columns = squareNumber;
let rows = squareNumber;

let grid = document.createElement('div');            // creates grid
grid.className = 'grid';
for (let i = 0; i < columns; ++i) {
    let column = document.createElement('div');      // creates column
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
        let cell = document.createElement('div');    // creates cell
        cell.className = 'cell';
        column.appendChild(cell);                  // appends cell to column (as row)

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
        })
        
    }
    grid.appendChild(column);                        // appends column to grid
}
document.getElementById("grid-container").appendChild(grid);                     // appends grid to webpage

