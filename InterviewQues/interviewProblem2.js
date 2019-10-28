//Find the largest string  in the function
//[ab, abd, adff, a, afkdfn]
//[ab, [ab, c], dfk, dhffd]

// function largestString(arr){
//     var newArray = [];

//     for(let i=0; i<arr.length; i++){
//         newArray.push(arr[i].length);
//     }
//     console.log(newArray);

//     for(let i = 0; i<newArray.length; i++){
//         for(let j = 0; i<newArray.length-i-1; j++){
//             if(newArray[j] > newArray[j+1]){
//                  temp = newArray[j];
//                  newArray[j] = newArray[j+1];          
//                  newArray[j+1] = temp;
//             }
//           }
//       }
// }

// largestString(['ab', 'abd', 'adff', 'a', 'afkdfn']);

// Write the body of the helloProperties(obj) function. 
// This function takes an object obj such as this one: { john : 12, brian : true, doe : 'hi', fred : false } 
// And returns an array containing all of its properties, prefixed with "Hello-", 
// like this: ['Hello-john', 'Hello-brian', 'Hello-doe', 'Hello-fred']; obj is always a defined JavaScript object.

function helloProperties(obj){
   var arr = [];
   for(var key of obj){
       arr.push(`Hello - ${key}`);
   }
   return arr;
}

var obj = {
    john : 12,
    brian : true,
    doe : 'hi',
    fred : false
};
console.log(helloProperties(obj));