/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */


/**
iterate over second list
* if start and end is included in firstList, then that is part of answer
* if start of first set is included in firstList but end is not, then start of secondlist and end of firstlist is answer
* if start is not in firstList but end is there, then end, end is the answer
* if start of firstList is greater than end of current, then ignore the value
* if start of secondList is greater than end of firstList, then ignore
*/

var intervalIntersection = function(firstList, secondList) {
    let outputArr = [];
    let first=0;
    let second=0;
    
    while (first < firstList.length && second < secondList.length) {
        
        let max = Math.max(firstList[first][0], secondList[second][0]);
        let min = Math.min(firstList[first][1], secondList[second][1]);
        
        if(min >= max) {
            outputArr.push([max,min]);
        }
        
        if(firstList[first][1] < secondList[second][1]) {
            first++;
        }else {
            second++;
        }
    }
    
    return outputArr;
};