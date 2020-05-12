//Single Element in a Sorted Array
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3327/
//You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10
// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let numsObj = {};
    for(let num of nums){
        if(!numsObj[num]){
            numsObj[num]=1;
        }else{
            numsObj[num]++;
        }
    }
    for(let num in numsObj){
        if(numsObj[num]===1){
            return num;
        }
    }
    
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11]));