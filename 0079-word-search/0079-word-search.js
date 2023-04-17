/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i=0;i<board.length;i++) {
        for(let j=0;j<board[i].length;j++) {
            if(dfs(board, i, j, word)){
                return true;
            }
        }
    }
    return false;
};

function dfs(grid, i, j, word) {
    if(word.length == 0){
        return true;
    }
    
    if(i<0 || j< 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != word[0]) {
        return false;
    }
    
    const currChar = grid[i][j];
    const nextWord = word.substring(1);
    grid[i][j] = 0;
    
    const result = dfs(grid, i+1, j, nextWord) || dfs(grid, i, j+1, nextWord) || dfs(grid, i-1, j, nextWord) || dfs(grid, i, j-1, nextWord);
    
    grid[i][j] = currChar;
    
    return result;
}