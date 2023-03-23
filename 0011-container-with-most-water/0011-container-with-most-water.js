/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length-1;
    
    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let waterCapacity = minHeight * (right-left);
        maxWater = Math.max(maxWater, waterCapacity);
        
        if(height[left] < height[right]) {
            left++;
        }else {
            right--;
        }
    }
    
    return maxWater;
};