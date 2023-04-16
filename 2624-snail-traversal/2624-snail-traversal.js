/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    let result = [];
    let arr = this;
    
    if(rowsCount * colsCount != arr.length) {
        return [];
    }
    
    let index=0;
    let direction = 0;
    let row = 0;
    let column = 0;
    
    for(let i=0;i<rowsCount;i++){
        result[i] = [];
    }
    
    while(index < arr.length){
        
        result[row][column] = arr[index];
        index++;
        
        if(direction == 0) {
            row++;
        }else {
            row--;
        }
        
        if(row == -1 || row == rowsCount){
            column++;
            row = row == -1 ? 0 : row-1;
            direction = direction == 1 ? 0 : 1;
        }
        
        
    }
     
    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */