/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) {
        return [];
    }
    
    let map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    
    function createCombinations(nums) {
        let arr = []
        if(nums.length == 1) {
            return map[nums];
        }
        
        let firstDigit = nums.substring(0,1);
        let otherDigits = createCombinations(nums.substring(1));
        
        for(let i = 0; i < map[firstDigit].length; i++) {
            for(let j=0; j< otherDigits.length; j++) {
                arr.push(map[firstDigit][i] + otherDigits[j]);
            }
        }
        return arr;
    }
    
    return createCombinations(digits);
};