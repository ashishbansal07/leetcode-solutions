/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    
    function generate (str, open, close) {
        if(open > n || close > n || open < close) {
            return;
        }
        if(str.length == n*2 && open == close) {
            result.push(str);
            return;
        }
        
        generate(str+"(", open+1, close);
        generate(str+")", open, close+1);
    }
    
    generate("", 0,0);
    return result;
};