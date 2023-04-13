/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map = new Map();
    
    for(let i=0;i<nums.length;i++) {
        map.set(nums[i], i);
    }
    
    for(let i=1;i<=nums.length; i++) {
        if(!map.has(i)) {
            return i;
        }
    }
    
    return nums.length + 1;
};