// // //Bubble Sort- WIthout cutting in the middle

// // // [10,-30, 97, 0, 5]
// // function bubbleSort(inputArray){

// //     var length = inputArray.length;
// //     var temp = 0;

// //     for(var i=0; i<length; i++){
// //         for(var j=0; j<length-i-1;j++){
// //             if(inputArray[j]>inputArray[j+1]){
// //                     temp = inputArray[j];
// //                     inputArray[j]=inputArray[j+1];
// //                     inputArray[j+1]= temp;
// //             }
            
// //         }
// //     }

// //     return inputArray;
// // }

// // console.log(bubbleSort([10,-30, 97, 0, 5]));



// function getCompressedString(str) {

//     // Your code goes here
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';
//     var arr = [];
  
//     for (let char of str) {
//       if (charMap[char]) {
//         charMap[char]++;
//       } else {
//         charMap[char] = 1;
//       }
//     }
  
//     for (let char in charMap) {
//       if (charMap[char] > max) {
//         num = charMap[char];
//         maxChar = char;
//         arr.push(maxChar);
     
//       }
//     }
  
//     return arr;
//   }

  //console.log(getCompressedString("aaabbc"));


//   function areArraysEquals(arr1, arr2) {
//     // Your code goes here
    
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(var i=0; i<arr1.length-1; i++){
//         if(arr1[i]===arr2[i]){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
  
//   }
//   console.log(areArraysEquals(["a", "b", "c"], ["a", "d", "c"])); // true

//   function getFileNameExtension(filename) {
//     // Your code goes here
//     if(filename === null){
//         return;
//     }
    
//     let extension = filename.split('.').splice(1);

//     return extension;
//   }
//   console.log((getFileNameExtension('file.ext')))


  function getLongestString(values) {
    // Your code goes here
    var temp = 0;
  var lengthArr = [];
  if(values === null){
      return;
  }
   for(let i = 0; i<values.length; i++){
        
       lengthArr.push(values[i].length);
   }
   
  for(let i = 0; i<lengthArr.length; i++){
      for(let j = 0; i<lengthArr.length-i-1; j++){
          if(lengthArr[j] > lengthArr[j+1]){
               temp = lengthArr[j];
               lengthArr[j] = lengthArr[j+1];          
               lengthArr[j+1] = temp;
          }
        }
    }
    
    var index = lengthArr(lengthArr.length-1);
    
    return values[index];
   
    
  }
  console.log((getLongestString(["a", "ab", "abc"])))
  //console.log(getLongestString(["big", ["ab", "a"], "tiny"]));


