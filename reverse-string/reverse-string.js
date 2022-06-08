/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let middle = s.length/2;
    for(let i=0;i<middle;i++) {
        let temp = s[i];
        s[i] = s[s.length-i-1];
        s[s.length-i-1] = temp;
    }
};