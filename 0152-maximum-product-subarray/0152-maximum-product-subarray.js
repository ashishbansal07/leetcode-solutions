/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let maxProduct = nums[0];
    let minP = nums[0];
    let maxP = nums[0];
    
    for(let i=1;i<nums.length;i++) {
        let temp = Math.max(minP * nums[i], maxP * nums[i], nums[i]);
        minP = Math.min(minP * nums[i], maxP * nums[i], nums[i]);
        maxP = temp;
        maxProduct = Math.max(maxProduct, maxP)
    }
    return maxProduct;
};