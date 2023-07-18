/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = [];
    for(let i=0;i<=m;i++) {
        memo[i] = Array(n+1).fill(0);
    }
    memo[1][0] = 1;
    
    for(let i=1;i<=m;i++) {
        for(let j=1;j<=n;j++) {
            memo[i][j] = memo[i-1][j] + memo[i][j-1];
        }
    }
    
    return memo[m][n];
};