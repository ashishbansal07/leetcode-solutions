/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowCount = matrix.length;
    let columnCount = matrix[0].length;
    
    if(target < matrix[0][0] || target > matrix[rowCount-1][columnCount-1]){
        return false;
    }
    
    for(let i=0;i<rowCount;i++) {
        if(target >= matrix[i][0] && target <= matrix[i][columnCount-1]) {
            
            for(let j=0;j<columnCount;j++) {
                if(target == matrix[i][j]) {
                    return true;
                }
            }
            return false;
        }
    }
    
    return false;
    
};