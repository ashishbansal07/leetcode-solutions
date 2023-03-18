/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const binarySearch = function(nums, start, end) {
        let mid = parseInt((start + end)/2);
        
        if((mid ==0 || nums[mid] > nums[mid-1] ) &&  (mid == nums.length-1 || nums[mid] > nums[mid+1])) {
            return mid;
        } else if(mid > 0 && nums[mid-1] > nums[mid]){
            return binarySearch(nums, start, mid-1);
        } else {
            return binarySearch(nums, mid+1, end);
        }
    }
    
    if(nums.length == 1){
        return 0;
    }
    
    let index = binarySearch(nums, 0, nums.length-1);
    
    return index;
};