/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if(intervals.length == 1) {
        return intervals;
    }
    
    let start = 0;
    let end = 1;
    
    intervals = intervals.sort((a,b) => a[0]-b[0])
    
    let merged = intervals[0];
    let result = [];
    
    for(let i=1;i<intervals.length;i++) {
        let current = intervals[i];
        
        if(current[0] <= merged[1]) {
            merged[1] = Math.max(current[1],merged[1])
        }else {
            result.push(merged);
            merged = current;
        }        
    }
    result.push(merged);

    return result;
};