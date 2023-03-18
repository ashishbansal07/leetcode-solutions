/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const findPivot = function(nums,start,end){
        if(end < start) {
            return -1;
        }
        
        let mid = parseInt((start+end)/2);
        if(nums[mid] > nums[mid+1]) {
            return mid;
        } else if (nums[mid < nums[mid-1]]) {
            return mid-1;
        }else if(nums[start] > nums[mid]) {
            return findPivot(nums, start, mid-1);
        } else {
            return findPivot(nums, mid+1, end);
        }
    }
    
    let pivot = findPivot(nums, 0, nums.length-1);
    
    if (pivot == -1) {
        return nums[0];
    } else {
        return nums[pivot+1];
    }
};