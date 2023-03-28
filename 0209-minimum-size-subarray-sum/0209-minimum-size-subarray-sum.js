/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Number.MAX_VALUE;
    let left = 0;
    let sum = 0;
    
    for( let right = 0; right<nums.length; right++) {
        let current = nums[right];
        sum += current;
        
        while (left <= right && sum >= target) {
            result = Math.min(result, right - left + 1);
            sum = sum - nums[left];
            left++;
        }
    }
    
    return result == Number.MAX_VALUE ? 0 : result;
};