/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let output = [];
    
    if(s.length < p.length) {
        return output;
    }
    
    let isAnagram = function(string1, string2) {
        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);
        
        for(let i=0;i<string1.length;i++) {
            count1[string1[i].charCodeAt(0)-97]++;
            count2[string2[i].charCodeAt(0)-97]++;
        }
        
        for(let i=0;i < 26; i++) {
            if(count1[i] != count2[i]) {
                return false;
            }
        }
        return true;
    }
    
    let anagramLength = p.length;
    for(let i=0; i<s.length; i++) {
        if(s.length < i+anagramLength) {
            break;
        }
        let current = s.substring(i,i+anagramLength);
        let currentChars = current.split("");
        
        if(isAnagram(current, p)) {
            output.push(i);
        }
    }
    return output;
};