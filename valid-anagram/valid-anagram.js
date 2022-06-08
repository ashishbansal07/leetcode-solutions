/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }
    
    let sObject = {};
    let tObject = {};
    for(let i=0;i<s.length;i++){
        let current = s[i];
        if(sObject[current]) {
            sObject[current]++;
        } else {
            sObject[current] = 1;
        }
    }
    
    for(let i=0;i<t.length;i++){
        let current = t[i];
        if(tObject[current]) {
            tObject[current]++;
        } else {
            tObject[current] = 1;
        }
    }
    
    let sKeys = Object.keys(sObject);
    for(let i=0;i<sKeys.length;i++) {
        if(sObject[sKeys[i]] != tObject[sKeys[i]] ) {
            return false;
        }
    }
    return true;
};