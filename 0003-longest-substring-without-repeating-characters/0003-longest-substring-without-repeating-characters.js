/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) {
        return 0;
    }
    if(s.length == 1) {
        return 1;
    }
    let charMap = {};
    let startIndex = 0;
    let endIndex = s.length-1;
    let substringLength = 0;
    let currentSubStringLength = 0;
    
    while(startIndex <= endIndex) {        
        let current = s[startIndex];
        if(charMap[current] != undefined) {
            substringLength = Math.max(substringLength, currentSubStringLength);
            startIndex = charMap[current] + 1;
            currentSubStringLength = 0;
            charMap = {};
        } else {
            charMap[current] = startIndex;
            currentSubStringLength++; 
            startIndex++;
        } 
    }
    return Math.max(substringLength, currentSubStringLength);
};