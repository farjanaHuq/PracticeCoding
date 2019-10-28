// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Note:

// You can assume that you can always reach the last index.

var jump = function(nums) {
    let currentIndex = nums[0];
    let lastIndex = nums.length-1;
    let jumps = 0;

    if(nums.length <= 1) return 0;
    if(nums.length === 2 ) return 1;   
    if(currentIndex>=lastIndex) return 1;

    if(currentIndex<lastIndex){
        for(i=1; i<nums.length;i++){
            //console.log(jumps);      
            currentIndex = i+nums[i];          
            jumps++;
            //console.log(currentIndex, lastIndex);
            if(currentIndex === lastIndex){    
                return jumps; 
            }                
        }       
    }  
};


console.log('====================Test One =====================');
console.log(jump([2,3,1,1,4])); //2
console.log('====================Test Two =====================');
console.log(jump([1,2])); //1
// console.log('====================Test Three =====================');
// console.log(jump([0]));  //0
console.log('====================Test Four =====================');
console.log(jump([1,1,1,1])); //2
console.log('====================Test Five =====================');
console.log(jump([3,2,1])); //1
// console.log('====================Test Six =====================');
// console.log(jump([1,2,3])); //2
console.log('====================Test Seven =====================');
console.log(jump([2,1,3])); //1
console.log('====================Test 8 =====================');
console.log(jump([1,2,1,1,1])); //2