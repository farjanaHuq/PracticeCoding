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

// test_list = [1,3,9,11,15,19,29]
// test_val1 = 25
// test_val2 = 15

//Pseudocode
//Find the middle item of the array (1)
//Compare 'value' with the middle element (2)
//if value is greater than middle then proceed to the next half of the array (3)
// find the middle from the next half (4)
//repeat step 2 and 3

function binarySearch(inputArray, value){
    
    var arrayLength = inputArray.length-1;
    var middle = Math.round((arrayLength)/2);
    var beforeMiddle = Math.round(middle/2);
    var nextMiddle = middle+Math.round((arrayLength)/2)-1;

    if(value>inputArray[middle]){     
        if(value < inputArray[nextMiddle]){
            console.log('Next Middle', inputArray[nextMiddle]);
            return findValue(middle, nextMiddle);
        }else{
            return findValue(nextMiddle, arrayLength);
        }

    }else{
        if(value < inputArray[beforeMiddle]){
            console.log('Before Middle', inputArray[beforeMiddle]);
            return findValue(0, beforeMiddle);
        }else{
            return findValue(beforeMiddle, middle);
        }
    }
    

    

    function findValue(start, end){
        for(var i=start; i<end; i++){
            if(value === inputArray[i]) {
                console.log('true');
                return true;
            }
          
        }
        return false;
    }
   
}

console.log('====================Test One =====================');
console.log(binarySearch([1,3,9,11,15,19,29], 15));
console.log('====================Test Two =====================');
console.log(binarySearch([1,3,9,11,15,19,29], 25));
console.log('====================Test Three =====================');
console.log(binarySearch([1,3,9,11,15,19,29], 10));
console.log('====================Test Four =====================');
console.log(binarySearch([1,3,9,11,15,19,29], 1));
console.log('====================Test Five =====================');
console.log(binarySearch([1,3,9,11,15,19,29], 9));
console.log('====================Test Six =====================');
console.log(binarySearch([], 25));

