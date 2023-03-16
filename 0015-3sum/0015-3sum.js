/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let updatedNums = nums.sort(function(a, b) {
      return a - b;
    });;
    let result = [];
    let tripletsInserted = {};
    
    if(nums.length < 3) {
        return result;
    }
    
    for (let i=0;i<updatedNums.length-2;i++) {
        let current = updatedNums[i];
        let sumCombination = findSum(updatedNums, i+1, -current);
        
        sumCombination.forEach(combination => {
            combination = [updatedNums[i], ...combination];
            let string = combination.toString();

            if (sumCombination.length > 0 && !tripletsInserted[string]) {
                tripletsInserted[string] = 1;
                result.push(combination);
            }
        });
    }
    
    return result;
};

const findSum = (updatedNums, start, sum) => {
    let i=start;
    let j=updatedNums.length-1;
    let result = [];
    
    while (i<j) {
        let currentSum = updatedNums[i] + updatedNums[j];
        if(currentSum === sum) {
            result.push([updatedNums[i], updatedNums[j]]);
            i++;
        } else if(currentSum < sum) {
            i++;
        } else if(currentSum > sum) {
            j--;
        }
    }
    return result;
}