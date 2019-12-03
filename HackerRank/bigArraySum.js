// function aVeryBigSum(ar) {
//     let sum = 0;
//     let firstElem = ar[0][0]*Math.pow(10,9);
//     console.log(firstElem);
//     // sum = firstElem;
//     for(let i=1;i<=ar[0][0];i++){
//         console.log(ar[1][i]);
//         sum+=i;
//     }
//     return firstElem+sum;
// }

function aVeryBigSum(ar) {
    let sum = 0;
    // let firstElem = ar[0]*Math.pow(10,9);
    let first9Digits = 1000000000;
     for(let i=1;i<ar.length;i++){
         sum+=(ar[i])
        // console.log(ar[i]-first9Digits);
     }
     //var result = ar[0]*first9Digits+sum;
     console.log(sum);
}


var ar =[5,
         1000000001,1000000002,1000000003,1000000004,1000000005];
 //console.log(aVeryBigSum(ar));
aVeryBigSum(ar);

// function alternatingSort(a) {
//     let b = [];
//     let n= a.length -1;
//     console.log(n)
//     b[0] = a[0];
//     for(let i=1; i<a.length;i++){ 
//         if(i%2!==0) {
//             b[i] = a[n-i];
//         }else{
//             b[i] = a[i-1];
//         }
//     }
//     // for(let i=1; i<=b.length;i++){
//     //     if(b[i-1]>b[i]) return false;
//     // }
//     // return true;
//   console.log(b);

//  }

//  a =  [1, 3, 5, 6, 4, 2];
//  alternatingSort(a);
 

