/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    const reverse = (start,end) => {
        let middle = (start+end)/2;
        for(let i=start;i<=middle;i++) {
            let temp = nums[i];
            nums[i] = nums[end-(i-start)]
            nums[end-(i-start)] = temp
        }
    }
    reverse(0,nums.length-1);
    reverse(0,k-1)
    reverse(k,nums.length-1);
};