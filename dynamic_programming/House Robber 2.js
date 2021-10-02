/**
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
 * That means the first house is the neighbor of the last one. Meanwhile, 
 * adjacent houses have a security system connected, and it will automatically contact the police if 
 * two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, 
 * return the maximum amount of money you can rob tonight without alerting the police.
 * 
 * Example 1:
 *  Input: nums = [2,3,2]
 *  Output: 3
 *  Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
 *  
 * Example 2:
 *  Input: nums = [1,2,3,1]
 *  Output: 4
 *  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *  Total amount you can rob = 1 + 3 = 4.
 */

 const robber = function(nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for(let i=2;i<nums.length;i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    return dp[nums.length-1];
};

var rob = function(nums) {
    if(nums.length == 1) {
        return nums[0];
    }
    let firstArr = nums.slice(1);
    let secondArr = nums.slice(0,-1);
    return Math.max(robber(firstArr), robber(secondArr));
};