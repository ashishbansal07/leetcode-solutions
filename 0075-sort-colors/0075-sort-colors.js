/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let ones = 0;
    let twos=0;
    let zeros = 0;
    
    for(let i=0;i<nums.length;i++) {
        if(nums[i] == 0) {
            zeros++;
        }else if(nums[i] == 1) {
            ones++;
        }else {
            twos++;
        }
    }
    
    let counter = 0;
    while(zeros) {
        nums[counter] = 0;
        counter++;
        zeros--;
    }
    while(ones) {
        nums[counter] = 1;
        counter++;
        ones--;
    }
    while(twos) {
        nums[counter] = 2;
        counter++;
        twos--
    }
    
};