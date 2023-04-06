/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsCopy = nums.slice(0);
    nums.sort((a,b) => a-b);
    let start = 0;
    let end = nums.length-1;
    
    while(start < end) {
        let startVal = nums[start];
        let endVal = nums[end];
        let sum = startVal + endVal;
        
        if(sum == target) {
            return [numsCopy.indexOf(startVal), numsCopy.lastIndexOf(endVal)];
        } else if(sum > target) {
            end--;
        } else {
            start++;
        }
    }
    return [];
};