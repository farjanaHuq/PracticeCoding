/**
 * @param {number} n
 * @return {number}
 */
//Question Link: https://leetcode.com/problems/n-th-tribonacci-number/submissions/
var tribonacci = function(n) {
    memo = new Array(n + 1).fill(undefined);
    function triHelper(n) {
        if (memo[n]) return memo[n];
        if (n == 0) {
            memo[n] = 0;
            return memo[n];
        }
        if (n == 1 || n == 2) {
            memo[n] = 1;
            return memo[n];
        }
        memo[n] = triHelper(n - 1) + triHelper(n - 2) + triHelper(n - 3);
        return memo[n];
    }
    triHelper(n);
    return memo[n];
};

console.log(tribonacci(25));