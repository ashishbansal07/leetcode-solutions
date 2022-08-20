/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n;
        let badVersion = -1;
        
        while (start <= end) {
            let mid = Math.floor(start + (end-start)/2);
            
            let ifBad = isBadVersion(mid);
            
            if(ifBad) {
                badVersion = mid;
                end = mid-1;
            } else {
                start = mid+1;
            }
        }
        return badVersion;
    };
};