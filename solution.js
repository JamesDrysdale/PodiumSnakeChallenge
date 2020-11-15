//Setup helper functions
let width = 2;
let pathLength = width * width;

let gridArea = [];   //Grid is initially empty

//Create a flat array of the correct length 
const flatArray = function() {
    let counter = 0;
    gridArea.push(0);    //Creates the first square with a value of 0. To start grid at 1, ommit this line.

    while (gridArea.length < pathLength) {
        counter = counter + 1;
        gridArea.push(counter);
    }
    //console.log(gridArea); // Using console.log to check an array of correct length is generated.
    return gridArea;
}



// This function takes a flat array of a given length and splits it into a 2D grid, by working out where the breakpoints are for each row
const squareGrid = function() {
    let rowCounter = 0;
    let start = 0
    let end = width;
    let newGrid = [];

    while (rowCounter < width) {
        newGrid.push(gridArea.slice(start, end)); // On each loop an appropriate slice is taken and pushed into the 2-D array to make rows
        
        start = start + width;
        end = end + width;
        rowCounter = rowCounter + 1
    }
    return newGrid;
}

console.log(flatArray());
console.log(squareGrid());
