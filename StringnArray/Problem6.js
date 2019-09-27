//Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
//write a method to rotate the image by 90 degrees Can you do this in place?

function rotateMatrix(m, n){
     
    let results = [];
    let rotateImage = [];

    for(let i=0; i<n; i++){
        results.push([]);
    }

    for(let i=0; i<m; i++){
        rotateImage.push([]);
    }
   
    var counter = 1;
    var startColumn = 0;
    var endColumn = m-1;
    var startRow = 0;
    var endRow = n-1;

    while(startColumn<=endColumn && startRow<=endRow){
        //First Row
        for(let i=startColumn; i<=endColumn; i++){
            results[startRow][i] =  counter;
            //console.log(counter);
            counter++;
        } 
        startRow++;
  
    }

    while(startColumn<=endRow && startRow<=endColumn){
        console.log('hi');
        //First Row
        for(let i=startRow; i<=endRow; i++){
           
            rotateImage[endRow][i] =counter;
            counter++;
        } 
        //results[i][endColumn]
        endColumn--;
        startRow++;
  
    }
    
    console.log(results);
    console.log(rotateImage);
   
}
rotateMatrix(3, 4);