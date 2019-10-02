//Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
//write a method to rotate the image by 90 degrees Can you do this in place?
//[1 2 3 
// 4 5 6
// 7 8 9]
function rotateMatrix90Degree(matrix, N) {

    console.log(matrix);
    let rotatedMatrix = [];

    for (var i = 0; i < N; i++) {
        rotatedMatrix.push([]);
    }


    for (let i = 0; i < N; i++) {

        for (j = N - 1; j >= 0; j--) {
            rotatedMatrix[i].push(matrix[j][i]);
        }
    }
    return rotatedMatrix;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateMatrix90Degree(matrix, 3));