/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    
    let maxLength = 0;
    let cache = {};
    
    
    const dfs = (row,column,prev) => {
        if(row < 0 || column < 0 || row >= matrix.length || column >= matrix[0].length) {
            return 0;
        }
        
        let current = matrix[row][column];
        if(current >= prev) {
            return 0;
        }
        
        let string = `${row}:${column}`;
        
        if(!cache[string]) {
            const top = dfs(row-1,column,current);
            const left = dfs(row,column-1,current);
            const bottom = dfs(row+1,column,current);
            const right = dfs(row,column+1,current);
            
            cache[string] = Math.max(top,left,right,bottom) + 1;
        }
        
        return cache[string];
    }
    
    
    for(let i=0;i<matrix.length;i++) {
        let currentRow = matrix[i];
        for(let j=0;j<currentRow.length;j++) {
            maxLength = Math.max(dfs(i,j,Infinity), maxLength); 
            
        }
    }
    return maxLength;
    
    
};