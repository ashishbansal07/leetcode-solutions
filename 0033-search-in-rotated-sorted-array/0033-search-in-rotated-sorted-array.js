/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const findPivot = function(arr, start, end) {
        let mid = parseInt((start+end)/2);
        
        if(end < start) {
            return -1;
        }
        
        
        
        if(arr[mid] > arr[mid+1]) {
            return mid;
        } else if(arr[mid] < arr[mid-1]) {
            return mid -1;
        } else if (arr[mid] > arr[start]) {
            return findPivot(arr, mid+1, end);
        } else {
            return findPivot(arr, start, mid-1);
        }
    }
    
    const binarySearch = function(arr, start, end, target) {
        
        if(end < start) {
            return -1
        }
        
        let mid = parseInt((start + end)/2);
        
        if(target > arr[mid]) {
            return binarySearch(arr, mid+1, end, target );
        } else if (target < arr[mid]) {
            return binarySearch(arr, start, mid-1, target );
        } else {
            return mid;
        }
    }
    
    let pivot = findPivot(nums, 0, nums.length-1);
    
    if(nums[pivot] == target) {
        return pivot;
    }
    
    if(pivot == -1) {
        return binarySearch(nums, 0, nums.length-1, target);
    } else if (nums[0] > target) {
        return binarySearch(nums, pivot+1, nums.length-1, target);
    } else {
        return binarySearch(nums, 0, pivot-1, target);
    }
};