//Link: https://leetcode.com/problems/binary-subarrays-with-sum/
// In an array A of 0s and 1s, how many non-empty subarrays have sum S.

// Example 1:

// Input: A = [1,0,1,0,1], S = 2
// Output: 4
// Explanation: 
// The 4 subarrays are bolded below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]


// Note:

// A.length <= 30000
// 0 <= S <= A.length
// A[i] is either 0 or 1.

function findSubArrays(nums, S) {
    let numOfArrays = 0;
    let currentSum = 0;
    let i = 0;
    
    for (i = 0; i < nums.length-1; i++) {
        let k = i+1;
       while(k<nums.length-1){
        k++;
          currentSum = nums[i]+nums[k];
          if(currentSum === S){
              numOfArrays++;
          }
         
       }
    }
    return numOfArrays;
}

console.log(findSubArrays([1,0,1,0,1], 2));