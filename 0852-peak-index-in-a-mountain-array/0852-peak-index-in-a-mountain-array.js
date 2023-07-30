/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let low=0;
    let high = arr.length-1;

    while(low<high) {
        let mid = parseInt((high+low)/2);
        if(arr[mid-1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            return mid;
        }
        if(arr[mid-1] > arr[mid]) {
            high = mid;
        }else if(arr[mid] < arr[mid+1]) {
            low = mid+1;
        }
    }
};