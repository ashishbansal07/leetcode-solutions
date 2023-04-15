/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let leftSmallestArr = [];
    let rightSmallestArr = [];
    let stack = [];
    
    for(let i=0;i<heights.length;i++) {
        let current = heights[i];
        var top = stack[stack.length-1];
        while(stack.length && heights[top] >= current) {
            stack.pop();
            top = stack[stack.length-1];
        }
        if(!stack.length) {
            leftSmallestArr[i] = 0;    
        } else {
            leftSmallestArr[i] = stack[stack.length-1]+1;
        }
        stack.push(i);
    }
    
    stack = []
    for(let i=heights.length-1; i>= 0; i--) {
        let current = heights[i];
        var top = stack[stack.length-1];
        while(stack.length && heights[top] >= current) {
            stack.pop();
            top = stack[stack.length-1];
        }
        if(!stack.length) {
            rightSmallestArr[i] = heights.length - 1;    
        } else {
            rightSmallestArr[i] = stack[stack.length-1] - 1;
        }        
        stack.push(i);
    }
    
    let max = 0;
    for(let i=0;i<heights.length; i++) {
        let currentArea = (rightSmallestArr[i] - leftSmallestArr[i] + 1) * heights[i];
        max = Math.max(max, currentArea);
    }
    
    return max;
};