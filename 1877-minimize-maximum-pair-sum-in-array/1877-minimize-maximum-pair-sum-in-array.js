/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    
    let left = 0;
    let right = nums.length-1;
    let sums = [];
    
    while(right > left) {
        sums.push(nums[left] + nums[right]);
        right--;
        left++;
    }
    
    return Math.max(...sums)
    
};