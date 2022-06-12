/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++) {
        let current = nums[i];
        if(obj[current]) {
            return true;
        } else {
            obj[current] = true;
        }
    }
    return false;
};