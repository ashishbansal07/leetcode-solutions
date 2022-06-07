/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let previous = nums[0];
    let length = 1;
    for(let i=1;i<nums.length;i++) {
        let current = nums[i];
        if(previous == current) {
            nums[i] = undefined;
        }else {
            previous = current;
            length++
        }
    }
    nums = nums.sort((a,b) => a-b);
    nums.length = length;
};