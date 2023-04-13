/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let leftMaxArr = [];
    let rightMaxArr = [];
    
    let left_max = height[0];
    leftMaxArr[0] = left_max;
    for(let i=1;i<height.length;i++) {
        left_max = Math.max(left_max, height[i]);
        leftMaxArr[i] = left_max;
    }
    
    let right_max = height[height.length-1];
    rightMaxArr[height.length-1] = right_max;
    for(let i=height.length-2;i>=0;i--) {
        right_max = Math.max(right_max, height[i]);
        rightMaxArr[i] = right_max;
    }
    
    for(let i=0;i<height.length;i++) {
        result = result + Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
    }
    
    return result;
    
    
};