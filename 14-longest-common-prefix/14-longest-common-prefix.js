/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    
    for(let i=0;i<strs[0].length;i++) {
        let current = strs[0][i];
        let newPrefix = prefix + current;
        
        for(let j=1;j<strs.length;j++) {
            if(strs[j][i] != current) {
                return prefix;
            }
        }
        prefix = newPrefix;
    }
    
    return prefix;
};