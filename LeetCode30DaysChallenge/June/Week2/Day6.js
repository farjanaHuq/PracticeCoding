// Problem: Largest Divisible Subset
//Link: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3359/

// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) 
//of elements in this subset satisfies:

// Si % Sj = 0 or Sj % Si = 0.

// If there are multiple solutions, return any subset is fine.

// Example 1:

// Input: [1,2,3]
// Output: [1,2] (of course, [1,3] will also be ok)
// Example 2:

// Input: [1,2,4,8]
// Output: [1,2,4,8]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    var sortedArr = nums.sort();
    var len = sortedArr.length;
   
    var dp = new Array(len).fill(1);
    var max=0;
    var subSet = [];
   
    for(let i=1; i<sortedArr.length;i++){
        for(let j=0; j<i; j++){
           if(sortedArr[i]%sortedArr[j]===0 && 1+dp[j]>dp[i]){
               dp[i] = 1+dp[j];
           }
           if(max<dp[i]){
               max = dp[i];
           }
        }
    }
    let prev = -1;
    for(let i=len-1; i>=0; i--){ 

         if(dp[i]==max && (prev%sortedArr[i]===0 || prev==-1)){
            subSet.push(sortedArr[i]);
         }
         prev = sortedArr[i];
         console.log(prev);
         max--; 
         
    }


   return subSet;
};

console.log(largestDivisibleSubset([1,3,2]));