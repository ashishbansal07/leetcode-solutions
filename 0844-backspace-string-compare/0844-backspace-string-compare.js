/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let string1 = "";
    let string2 = "";
    
    for(let i=0;i<s.length;i++) {
        let current = s[i];
        if(current == "#") {
            string1 = string1.length > 0 ? string1.substring(0,string1.length-1) : string1; 
        }else {
            string1 += current;
        }
    }
    
    for(let i=0;i<t.length;i++) {
        let current = t[i];
        if(current == "#") {
            string2 = string2.length > 0 ? string2.substring(0,string2.length-1) : string2;
        }else {
            string2 += current;
        }
    }
    
    return string1 == string2;
};