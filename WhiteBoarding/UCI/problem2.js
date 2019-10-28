//The abbreviation is consists of  fisrt and last character, and the number of letters in between the 1st and last elements.
//find out that the new array with the abbreviated words is unique or not.
//['apple', 'dog', 'biscuit', 'dig']


function isAbrreviationUnique(arr){
    let found = new Set();
    for(let i=0; i<arr.length; i++){
        var key = arr[i][0]+[arr[i].length-2]+arr[i][arr[i].length-1];
        if(found.has(key)){
            return true;
        }
        found.add(key);
    }
    console.log(found);
    return false;
}

var testArr = ['apple', 'dog', 'biscuit', 'donut'];
console.log(isAbrreviationUnique(testArr));