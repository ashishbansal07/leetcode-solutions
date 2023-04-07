/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let string = x + "";
    let negative = false;
    
    if(string[0] == "-") {
        negative = true;
        string = string.substring(1);
    }
    
    string = string.split("").reverse().join("");
    
    if(negative) {
        string = "-" + string;
    }
    
    let result =  parseInt(string);
    return result > 0 ? (result > Math.pow(2,31)-1 ? 0 : result) : (result < -Math.pow(2,31) ? 0 : result)
};