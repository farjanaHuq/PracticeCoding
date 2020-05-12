//Problem: Find the Town Judge
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3325/

//In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
// Note:
// 1 <= N <= 1000
// trust.length <= 10000
// trust[i] are all different
// trust[i][0] != trust[i][1]
// 1 <= trust[i][0], trust[i][1] <= N

// Example 1:
// Input: N = 2, trust = [[1,2]]
// Output: 2

// Example 2:
// Input: N = 3, trust = [[1,3],[2,3]]
// Output: 3

// Example 3:
// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

// Example 4:
// Input: N = 3, trust = [[1,2],[2,3]]
// Output: -1

// Example 5:
// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3

//Prseudo code
//Town judge trusts nobody
//Everybody trusts town judge
//Town judge does not trust town judge

var trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];

var findJudge = function (N, trust) {
  var trustedPeople = [];
  let trustLength = trust.length;

  if (N <= 0 || N > 1000 || trustLength > 10000) return -1; // 1 <= N <= 1000 and  trust.length <= 10000

  if (validateTrust(trust)) {
    for (var i = 0; i < trust.length; i++) {
      if (trust[i][0] != trust[i][1]) {
        trustedPeople.push(trust[i][1]);
      }
    }
  }
  // 1 <= trust[i][0], trust[i][1] <= N
  for (var num of trustedPeople) {
    if (num === 0 || num > N) return -1;
  }

  if (trustedPeople.length === 1) return trustedPeople[0];
  else return majorityElement(trustedPeople);
};

var compareObjects = function (arr1, arr2) {
  if (
    (arr1[0] === arr2[0] && arr1[1] === arr2[1]) ||
    (arr1[0] == arr2[1] && arr1[1] === arr[2]) 
  ) {
    return true;
  }
  return false;
};
var validateTrust = function (trust) {
  for (let arr1 of trust) {
    for (let arr2 of trust) {
      if (compareObjects(arr1, arr2)) return false; //trust element should not be equal trust[i][0] != trust[i][1]
    }
  }
  return true;
};
var majorityElement = function (trustedPeople) {
  let Obj = {};
  let max = 0;
  maxNum = "";
  for (let elem of trustedPeople) {
    if (!Obj[elem]) {
      Obj[elem] = 1;
    } else {
      Obj[elem]++;
    }
  }
  for (let elem in Obj) {
    if (Obj[elem] > max) {
      max = Obj[elem];
      maxNum = elem;
    }
  }
  return maxNum;
};
console.log(findJudge(4, trust));
// console.log(
//   validateTrust([
//     [1, 3],
//     [2, 3],
//     [3, 1],
//   ])
// );
