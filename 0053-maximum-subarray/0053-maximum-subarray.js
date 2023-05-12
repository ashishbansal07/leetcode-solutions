/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length == 1) {
        return nums[0];
    }
    
    
    let middle = Math.floor(nums.length/2);
    
    let left_mss = maxSubArray(nums.slice(0,middle));
    let right_mss = maxSubArray(nums.slice(middle));
    
    let left_sum = -100000;
    let right_sum = -100000;
    
    let sum = 0;
    
    for(let i=middle-1;i>=0;i--) {
        sum += nums[i];
        left_sum = Math.max(sum, left_sum);
    }
    
    sum = 0;
    for(let i=middle;i<nums.length;i++) {
        sum += nums[i];
        right_sum = Math.max(sum, right_sum);
    }
    
    let result = Math.max(left_mss, right_mss);
    result = Math.max(result, left_sum + right_sum);
    return result;
};