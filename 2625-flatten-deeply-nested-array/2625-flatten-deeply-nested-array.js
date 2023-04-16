/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let result = [];
    
    function reduceArr(newArr, depth) {
        for(let i=0;i<newArr.length;i++) {
            let current = newArr[i];
            if(Array.isArray(current) && depth > 0) {
                reduceArr(current, depth-1);
            }else {
                result.push(current);
            }
        }    
    }
    
    reduceArr(arr, n);
    return result;
};