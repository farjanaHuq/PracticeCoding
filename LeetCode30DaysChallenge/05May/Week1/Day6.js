//Problem: Majority Element
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3321/
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maxAppearance = (nums.length/2);
    let numObj = {};
    console.log(maxAppearance);
    for(let num of nums){
        if(!numObj[num]){
            numObj[num]=1;
        }else{
            numObj[num]++;
        }
    }
    console.log(numObj);
    for(let num in numObj){
        if(numObj[num]>maxAppearance){
            console.log(num);
        }
    }

};

majorityElement([2,2,1,1,1,2,2]);
