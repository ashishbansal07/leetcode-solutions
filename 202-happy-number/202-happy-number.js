/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    const set = new Set();
    
    while (n != 1) {
        
        if(set.has(n)) {
            return false;
        }
        set.add(n);
        
        let nums = n.toString();
        nums = nums.split("");
        
        let tempSum = 0;
        
        for(let i=0;i<nums.length;i++) {
            tempSum += Math.pow(parseInt(nums[i]),2);
        }
        
        n = tempSum;
    }
    
    return true;
    
};