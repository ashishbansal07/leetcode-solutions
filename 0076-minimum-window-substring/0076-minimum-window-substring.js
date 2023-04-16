/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let result = "";
    let map = {};
    let sMap = {};
    let matchCount = 0;
    let desiredMatchCount = t.length;
    
    for(let i=0;i<t.length;i++) {
        let current = t[i];
        if(map[current]) {
            map[current] = map[current]+1;
        }else {
            map[current] = 1;
        }
    }
    
    let i = -1;
    let j = -1;
    while(true) {
        let flag1 = false;
        let flag2 = false;
        
        while(i<s.length - 1 && matchCount < desiredMatchCount) {
            i++;
            let current = s[i];
            if(sMap[current]) {
                sMap[current] = sMap[current]+1;
            }else {
                sMap[current] = 1;
            }            
            matchCount = sMap[current] <= map[current] ? matchCount+1 : matchCount;
            flag1 = true;
        }
        
        while(j < i && desiredMatchCount == matchCount) {
            let substr = s.substring(j+1, i+1);
            if(result.length == 0 || result.length > substr.length) {
                result = substr;
            }
            j++;
            let current = s[j];
            sMap[current] = sMap[current] - 1;
            matchCount = (map[current] && sMap[current] < map[current]) ? matchCount -1 : matchCount;
            flag2 = true;
        }
        
        if(flag1 == false && flag2 == false) {
            break;
        }
    }
    
    
    return result;
};