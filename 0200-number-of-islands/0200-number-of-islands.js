/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    
    for (let i=0;i<grid.length;i++) {
        let currentRow = grid[i];
        
        for (let j=0;j<currentRow.length;j++) {
            let currentElement = currentRow[j];
            
            if(currentElement == "1") {
                islands++;
                dfs(grid, i, j);
            }
        }
    }
    
    return islands;
};

function dfs(grid, rowIndex, columnIndex) {
    
    if(rowIndex < 0 || rowIndex >= grid.length 
       || columnIndex < 0 || columnIndex >= grid[0].length
        || grid[rowIndex][columnIndex] == "0") {
        return;
    }
    grid[rowIndex][columnIndex] = "0";
    dfs(grid, rowIndex-1, columnIndex)
    dfs(grid, rowIndex+1, columnIndex);
    dfs(grid, rowIndex, columnIndex+1);
    dfs(grid, rowIndex, columnIndex-1);
    return;
}