//Problem: Maximum Subarray
//Link: 
//Given an integer array nums, find the contiguous subarray (containing at least one number) 
//which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */

 //Kadane's Algorithm
var maxSubArray = function(nums) {
    var maxSumAtCurrentIndex = 0;
    var maxSum = Number.MIN_SAFE_INTEGER; //Declaring minimum integer

    for(let elem of nums){
       
        maxSumAtCurrentIndex = maxSumAtCurrentIndex+elem;
        if(maxSumAtCurrentIndex< elem){
            maxSumAtCurrentIndex = elem;
        }
        if(maxSum<maxSumAtCurrentIndex){
            maxSum = maxSumAtCurrentIndex;
        }
    }
    return maxSum;
};

console.log(maxSubArray([4,-1,2,1]));