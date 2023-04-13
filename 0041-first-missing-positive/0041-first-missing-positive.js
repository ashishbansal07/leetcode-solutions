/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map = new Map();
    
    for(let i=0;i<nums.length;i++) {
        let current = nums[i];
        if(current > 0){
            map.set(current, i);
        }
    }
    
    for(let i=1;i<=nums.length; i++) {
        if(!map.has(i)) {
            return i;
        }
    }
    
    return nums.length + 1;
};