/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let index1 = 0;
    let index2 = 0;
    let mergedArr = [];
    
    while (index1 < nums1.length && index2 < nums2.length) {
        if(nums1[index1] < nums2[index2]) {
            mergedArr.push(nums1[index1]);
            index1++;
        } else if (nums1[index1] > nums2[index2]) {
            mergedArr.push(nums2[index2]);
            index2++;
       } else {
            mergedArr.push(nums2[index2]);
            mergedArr.push(nums1[index1]);
            index2++;
            index1++;
       }
    }
    
    if (index1 < nums1.length) {
        for(i = index1; i< nums1.length;i++)
            mergedArr.push(nums1[i]);
    }
    
    if (index2 < nums2.length) {
        for(i = index2; i< nums2.length;i++)
            mergedArr.push(nums2[i]);
    }
    
    if (mergedArr.length % 2 == 0) { 
        let mid1 = Math.floor(mergedArr.length/2);
        let mid2 = Math.floor((mergedArr.length-1)/2);
        return (mergedArr[mid1] + mergedArr[mid2])/2; 
    } else {
        let mid1 = Math.floor(mergedArr.length/2);
        return mergedArr[mid1];
    }
};