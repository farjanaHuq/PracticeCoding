// Sort Colors
// Given an array with n objects colored red, white or blue, sort them in-place so that objects 
// of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var len = nums.length;
    var startIndex = new Array(len).fill(0); // This array will store the index of elements in nums array
   
   //counting and storing the occurance of elements in nums array in the startIndex array
    for(let i=0; i<len; i++){
        if(startIndex[nums[i]]===0){
            startIndex[nums[i]] = 1;
        }else{
            startIndex[nums[i]]++;
        }     
    }
    //Adding the elements starting from index 1 with the previous element so that we will know how many elements are 
    //there before the current element
    for(let i=1; i<startIndex.length; i++){
         startIndex[i] +=startIndex[i-1];
    }
    //Adding 0 starting Index, because in nums array we have 0 element
    startIndex.unshift(0);
    //removing the last index so that startIndex will be exist in the same size as nums Array
    startIndex.pop();
    //Declaring an array to store the sorted elements of nums array
    var sortedArray = new Array(startIndex[startIndex.length-1]);
    
    //Looping through the element of nums array
    for(let elem of nums){
      //taking the index of elems from startIndex array  
      var index = startIndex[elem];
      //storing the elem at the index taken from startIndex array
       sortedArray[index] = elem;
       //nums.splice(index, 1, elem);
      //increasing the index so that if the same elem occurs multiple times, will be stored in the next index of sorted array
      startIndex[elem]++;
    }
   
    console.log(nums);
 
   
    return sortedArray;
};

console.log(sortColors([2,0,2,1,1,0]));