/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = 0;
    let index2 = 0;
    
    while(index1 < nums1.length && index2 < n) {
        if(nums1[index1] <= nums2[index2]) {
            index1++;
        } else {
            insertNum(nums1, index1, nums2[index2]);
            index1++;
            index2++;
        }
    }
    
    while(index2 < n) {
        let index = m + index2;
        insertNum(nums1,index ,nums2[index2])
        index2++;
    }
};

function insertNum(arr, index, val) {
    for(let i = arr.length-1; i >= index; i--) {
        if(index == i) {
            arr[i] = val;
        }else {
            arr[i] = arr[i-1];
        }
    }
}