// """You're going to write a binary search function.
// You should use an iterative approach - meaning
// using loops.
// Your function should take two inputs:
// a Python list to search through, and the value
// you're searching for.
// Assume the list only has distinct elements,
// meaning there are no repeated values, and 
// elements are in a strictly increasing order.
// Return the index of value, or -1 if the value
// doesn't exist in the list."""


//Pseudocode
//Find the middle item of the array (1)
//Compare 'value' with the middle element (2)
//if value is greater than middle then proceed to the next half of the array (3)
// find the middle from the next half (4)
//repeat step 2 and 3

function binarySearch(inputArray, value){
    
    var middle = (inputArray.length -1)/2;
    console.log(middle);
}