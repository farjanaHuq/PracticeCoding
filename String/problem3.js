//Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer 
// NOTE: One or two additional variables are fine An extra copy of the array is not FOLLOW UP
// Write the test cases for this method

function removeDuplicateCharacter(givenString){
    let resultString = '';
      if(givenString.length<1){
          return;
      }
      for(var i=0; i<givenString.length; i++){
          if(givenString.charAt(i)===givenString.charAt(i+1)){
              console.log('Duplicate', givenString.charAt(i));
              resultString = givenString.replace(givenString.charAt(i), '');
          }
      }
      return resultString;
      
}

var theString = 'hello';
console.log(theString.indexOf('l'));
console.log(theString.lastIndexOf('o'));

console.log(removeDuplicateCharacter(theString));