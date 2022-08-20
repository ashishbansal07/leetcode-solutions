/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let toBeInserted = -1;
    
    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);
        let current = nums[mid];
        
        if(target == current) {
            return mid;
        } else if(target < current) {
            toBeInserted = mid;
            end = mid-1;
        } else {
            toBeInserted = mid + 1;
            start = mid + 1;
        }
    }
    
    return toBeInserted == -1 ? 0 : toBeInserted;
};