/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    
    for(let i=0;i<nums.length;i++) {
        
        let len = result.length;
        for(let j=0; j < len; j++) {
            let curr = result[j].slice(0);
            curr.push(nums[i]);
            result.push(curr);
        }
    }
    
    return result;
};