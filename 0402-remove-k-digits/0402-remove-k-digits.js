/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    
    for(let i=0;i<num.length;i++) {
        let current = num[i];
        
        while(stack.length > 0 && k > 0 && stack[stack.length-1] > current) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }
    
    while(stack.length > 0 && k > 0) {
        stack.pop();
        k--;
    }
    
    while(stack.length > 0 && stack[0] == 0) {
        stack.shift();
    }
    
    return stack.join("") || "0";
};