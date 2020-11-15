Run file using command: node solution.js

==Process==

1. Take the size of the grid and generate a 2D grid to traverse. E.g. 

A 2 * 2 would produce:

[
    [0, 1],
    [2, 3]
]

2. Create a queue (empty array), push into it the location of cells that have not been visited.

3. Define start point. (With each loop, the start point increments until all cells in the grid have been used).

4. Store current location details 

5. Find neighbors for the current location.

6. If the neighbor is not visited, push location into the queue, repeat steps 4 to 5

7. If there are no more neighbours to visit, check that all cells have been visited. 
    If the number of cells visited is less than the number of cells in the grid return false (invalid path)
    If the number of cells equals the number of cells in the grid, return true - valid path found
        Save path to array of 'found paths' only if that arrangement has not already been stored
        Return the length of the found paths array 
    
    

