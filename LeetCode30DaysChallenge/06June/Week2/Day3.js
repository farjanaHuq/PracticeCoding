// Search Insert Position
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//Link: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3356/

// You may assume no duplicates in the array.

// Example 1:
// Input: [1,3,5,6], 5
// Output: 2

// Example 2:
// Input: [1,3,5,6], 2
// Output: 1

// Example 3:
// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     var middle = Math.floor((nums.length)/2);
//     if(target=== nums[middle]) return middle;
    
//     if(target<nums[middle]){
//         for(let i=middle; i>=0; i--){
//             if(nums[i] === target){
//                   return i;
//             }else if(target>nums[i-1]&&target<nums[i]){
//                 return i;
//             }else if(target<nums[i]){
//                 return i-1;
//             }
//         }
//     }
//     if(target>nums[middle]){
//         for(let i=nums.length-1; i>=middle; i--){
//             if(nums[i] === target){
//                   return i;
//             }else if(target>nums[i-1]&&target<nums[i]){
//                 return i;
//             }else if(target>nums[i]){
//                 return i+1;
//             }
//         }
//     }
//     //console.log(middle);
// };
var searchInsert = function(nums, target) {
    var middle = 0;
    var start = 0;
    var end = nums.length-1;
    
    while(start+1<end){
        middle = Math.floor(start+(end-start)/2);
        if(nums[middle] === target) {
            return middle;
        }
        else if(nums[middle] > target){
             end = middle;
        }else{
            start = middle;
        }
    }
    
    if(nums[end]<target) return end+1;
    else if (nums[start]>=target) return start;
    else return end;
    
    

};
console.log(searchInsert([1,3,5,6], 2));