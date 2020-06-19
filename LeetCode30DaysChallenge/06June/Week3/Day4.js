// H-Index II
// Link: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3364/

// Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.
// According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, 
//and the other N − h papers have no more than h citations each."

// Example:

// Input: citations = [0,1,3,5,6]
// Output: 3 
// Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had 
//              received 0, 1, 3, 5, 6 citations respectively. 
//              Since the researcher has 3 papers with at least 3 citations each and the remaining 
//              two with no more than 3 citations each, her h-index is 3.
// Note:

// If there are several possible values for h, the maximum one is taken as the h-index.

// Follow up:

// This is a follow up problem to H-Index, where citations is now guaranteed to be sorted in ascending order.
// Could you solve it in logarithmic time complexity?

//My understanding
//1.array of citation is given
//2.return the h-index of a researcher
//3.When researcher has N number of paper, if the researcher reach at least h citation among h number of paper, and the rest
//N-h number of paper has less than h number of citation, then the researcher reach h-index.

//Pseudocode
//i=1 find h and N-h
//if(h===arr.length-1) return h;
//max = h
//
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations == null || citations.length == 0) {
        return 0;
    }
    let len = citations.length-1;
    let start = 0;
    let end = citations.length-1;
   
    while(start<=end){
        let mid = Math.floor(start + (end-start)/2);
        if(citations[mid]<len-mid){     //len-mid=number of paper
            start=mid+1;
        }else{
            end = mid-1;
        }  
    }
   return len-start;

};

console.log(hIndex([0,1,3,5,6, 8,9]))
