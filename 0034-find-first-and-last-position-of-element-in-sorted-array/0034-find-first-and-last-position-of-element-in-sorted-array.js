/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let retArr = [-1,-1]; 
    if(target < nums [0] || target > nums[nums.length-1]) {
        return retArr;
    }
    
    let start = 0, end=nums.length-1;
    while (start < end) {
        let mid = Number.parseInt((start+end)/2);
        if(nums[mid] < target){
            start = mid + 1;
        }else {
            end = mid;
        }
    }
    
    if(nums[start] == target) {
        retArr[0] = start;
    }else {
        return retArr;
    }
    
    end=nums.length-1;

    while (start < end) {
        let mid = Number.parseInt((start+end)/2) +1;
        if(nums[mid] > target){
            end = mid - 1;
        }else {
            start = mid;
        }
    }
    
    if(nums[end] == target) {
        retArr[1] = end;
    }
    
    return retArr;
};
