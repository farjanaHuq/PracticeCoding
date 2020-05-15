//Maximum Sum Circular Subarray
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/536/week-3-may-15th-may-21st/3330/
//Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

// Here, a circular array means the end of the array connects to the beginning of the array. 
//  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

// Also, a subarray may only include each element of the fixed buffer A at most once. 
//  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j 
// with k1 % A.length = k2 % A.length.)

// Example 1:
// Input: [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3

// Example 2:
// Input: [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

// Example 3:
// Input: [3,-1,2,-1]
// Output: 4
// Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

// Example 4:
// Input: [3,-2,2,-3]
// Output: 3
// Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

// Example 5:
// Input: [-2,-3,-1]
// Output: -1
// Explanation: Subarray [-1] has maximum sum -1

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) { 
    var size = A.length; 

    // Case 1: get the maximum sum using standard kadane's algorithm 
    var maxKadane = kadane(A); 
    var maxWrap  =  0; 

    for (var i = 0; i < size; i++) 
    { 
        maxWrap += A[i]; // Calculate array-sum 
        A[i] = -A[i];  // invert the array (change sign) 
    } 
    // max sum with corner elements will be: 
    // array-sum - (-max subarray sum of inverted array) 
    maxWrap = maxWrap + kadane(A); 
   
    if(maxWrap === 0) return maxKadane;
    // The maximum circular sum will be maximum of two sums 
    return (maxWrap > maxKadane)? maxWwrap: maxKadane; 
};

function kadane(A){
    var maxSumAtCurrentIndex = 0;
    var maxSum = Number.MIN_SAFE_INTEGER; //Declaring minimum integer

    for(let elem of A){
       
        maxSumAtCurrentIndex = maxSumAtCurrentIndex+elem;
        if(maxSumAtCurrentIndex< elem){
            maxSumAtCurrentIndex = elem;
        }
        if(maxSum<maxSumAtCurrentIndex){
            maxSum = maxSumAtCurrentIndex;
        }
    }
    return maxSum;
}
console.log(maxSubarraySumCircular([-2,-3,-1]));
// Note:

// -30000 <= A[i] <= 30000
// 1 <= A.length <= 30000