//Write a method to replace all spaces in a string with ‘%20’

function replaceSpace(str){
    let arrOfString = str.split(' ');
  
    for(var i=0; i<arrOfString.length; i++){
        arrOfString[i]+= '%20';
    }
    console.log(arrOfString);
    return arrOfString.join('');
}

console.log(replaceSpace('assfd ad aa'));
