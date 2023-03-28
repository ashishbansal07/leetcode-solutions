/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let product = 1;
    let counter = 0;
    let left = 0;
    
    if (k <= 1) {
        return 0;
    }
    
    for (let right=0;right<nums.length;right++) {
        let current = nums[right];
        product *= current;
        
        while (left < right && product >= k) {
            product = Math.floor(product/nums[left]);
            left++;
        }
        
        if(product < k)
            counter += (right-left) +1;
    }
    
    return counter;
};