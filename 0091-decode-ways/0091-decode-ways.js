/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === "0") {
        return 0;
    }    

    let combinations = new Array(s.length+1).fill(0).fill(1,0,2);
    
    for(let i=2;i<=s.length;i++) {
        let prevOne = parseInt(s[i-1]);
        let prevTwo = parseInt(s[i-2])*10 + parseInt(s[i-1]);
        
        if(1 <= prevOne && prevOne <= 9) {
            combinations[i] += combinations[i-1];
        }
        if(10 <= prevTwo && prevTwo <= 26) {
            combinations[i] += combinations[i-2];
        }
    }
    
    return combinations[s.length];
};