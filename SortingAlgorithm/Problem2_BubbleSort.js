//Bubble Sort- WIthout cutting in the middle

// [10,-30, 97, 0, 5]
function bubbleSort(inputArray){

    var length = inputArray.length;
    var temp = 0;

    for(var i=0; i<length; i++){
        for(var j=0; j<length-i-1;j++){
            if(inputArray[j]>inputArray[j+1]){
                    temp = inputArray[j];
                    inputArray[j]=inputArray[j+1];
                    inputArray[j+1]= temp;
            }
            
        }
    }

    return inputArray;
}

console.log(bubbleSort([10,-30, 97, 0, 5]));