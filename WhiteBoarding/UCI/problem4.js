// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// function missingElement(A){
//    A.sort();
//    console.log(A);
//    var n = A.length;
//    var totalSum = n*(n+1)/2;
//    console.log(totalSum);
//    var sum = 0

//    for(let i=0; i<A.length; i++){
//        sum+= A[i];
//    }
//    console.log('sum', sum);
// }

// console.log(missingElement([1, 3, 6, 4, 1, 2]));
// console.log(missingElement([-1, -3]));



function printPrime(n){
    var primeNumbers = [];
    var q = Math.floor(Math.sqrt(n));
    for(var i=2; i<=n; i++){
      for(var j=2; j<=q; j++){
          if(i===j || i){
              primeNumbers.push(i);
          }
      }
    }
    return primeNumbers;
}

console.log(printPrime(10));