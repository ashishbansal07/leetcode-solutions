/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0, top = 0, right = matrix[0].length-1, bottom = matrix.length-1;
    let current = 0;
    let result = [];
    
    
    while (left <= right && top <= bottom) {
        if(current == 0) {
            for (let i=left;i<=right;i++) {
                result.push(matrix[top][i]);
            }
            top++;
            current = 1;
        } else if (current == 1) {
            for (let i=top;i<=bottom;i++) {
                result.push(matrix[i][right]);
            }
            right--;
            current = 2;
        } else if (current == 2) {
            for (let i=right;i>=left;i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
            current = 3;
        } else if (current == 3) {
            for (let i=bottom;i>=top;i--) {
                result.push(matrix[i][left]);
            }
            left++;
            current = 0;
        }
    }
    return result;
};