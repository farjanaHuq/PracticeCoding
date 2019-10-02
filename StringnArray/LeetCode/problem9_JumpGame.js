//JumpGame : Leet Code

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.


// function canJump(arr){
   
//     let lastIndex = arr.length-1;
//     let step = 1;
   
//     let jumpLength = countStep();
//     // console.log(jumpLength);
//     console.log(arr[jumpLength]);

//     if(arr[jumpLength]===0){
     
//         return false;
//     }
//     else if(jumpLength === lastIndex){
//         return true;
//     }else{
//         return true;
//     }

//     function countStep(){
//         if(arr[0]===0){
//             step = 0;
//         }
//         step = step+arr[step];
//         return step;
//     }
// }

//=========================================Another Solution=======================================//
var canJump = function(nums) {
    let prevMaxIdxJump = nums[0];
    for (let i = 1; i < nums.length; i++){
        if (prevMaxIdxJump < i) return false;
        prevMaxIdxJump = Math.max(prevMaxIdxJump, i+nums[i]);
    }
    return true; 
};
console.log('====================Test One =====================');
console.log(canJump([2,3,1,1,4]));
console.log('====================Test Two =====================');
console.log(canJump([3,2,1,0,4]));
console.log('====================Test Three =====================');
console.log(canJump([]));
console.log('====================Test Four =====================');
console.log(canJump([1,2]));
console.log('====================Test Five =====================');
console.log(canJump([0,1]));