//Number coins to make 0 cents = 0
//Num of ways to make if we have No coins at all = infinifty amount
//If amount < max coin in our set, ignore max coin and use answer from set without it
//We have 2 choice: Coin set: [1,3]
//1.Dont't use max coin solution: conside 1 row above
//2.Use max coin in the solution
//3.Take that answer+1

// Goal: 4 =>
//Choice 1. ROw above 2 coins.
//Assume max coin (4) is in answer, we need 0 coins to make 4-4=0 cents
//Since we assume 4 is i answer, solution is 0 coins+1 = 1 coin

//Take mun if choice and 2 answers = min(2,1) =1.
//<---------------------------------------------Dynammic Programming => Optimized Solution--------------------------------------------------------->
function coinChangeOptimizedDP(coins, amount) {
  var array = [];
  var row = 0;
  var col = 0;

  //creating rows of an 1D array
  for (; col <= amount; col++) {
    array.push(0);
  }
  //if there are no denominations and the amount is positive, there is no solution, so for convenience the result
  //can be infinite, in this case: assume 100 in this case
  for (let col = 1; col <= amount; col++) {
    array[col] = 100;
  }
  for (let i = 1; i <= coins.length; i++) {
    //declaring the current coin
    let current_coin = coins[i - 1];
    for (let col = current_coin; col <= amount; col++) {
      array[col] = Math.min(array[col], array[col - current_coin] + 1);
    }
  }
  console.log(array);
  return array[amount];
}
console.log(
  "Min ways to choose the amount is: ",
  coinChangeOptimizedDP([1, 3, 4], 6)
);

//<---------------------------------------------Dynammic Programming => min ways to choose your amount--------------------------------------------------------->
function coinChangeDP(coins, amount) {
  var array = [];
  var row = 0;
  var col = 0;

  //creating rows of an 1D array
  //if amount = 0, there is zero way to choose the number of coins
  for (; row <= coins.length; row++) {
    array.push([0]);
  }
  //creating a 2D array
  for (; row < array.length; row++) {
    for (; col < amount; col++) {
      array[row][col] = 0;
    }
  }
  //if amount = 0, there is zero way to choose the number of coins
  for (let row = 0; row <= coins.length; row++) {
    array[row][0] = 0;
  }
  //if there are no denominations and the amount is positive, there is no solution, so for convenience the result
  //can be infinite, in this case: assume 100 in this case
  for (let col = 1; col <= amount; col++) {
    array[0][col] = 100;
  }
  //choosing min num of ways for each amount (0 to 6)
  for (row = 1; row <= coins.length; row++) {
    //declaring the current coin
    let current_coin = coins[row - 1];
    for (col = 1; col <= amount; col++) {
      //if the denomination is less than the amount to be paid, then we consider two options, the option that requires fewer
      //will be choosen
      if (current_coin <= col) {
        array[row][col] = Math.min(
          array[row - 1][col],
          array[row][col - current_coin] + 1
        );
      }
      //if the amount to be paid is smaller than the highest denomination, then the denomination can be discarded
      else {
        array[row][col] = array[row - 1][col];
      }
    }
  }
  //console.log(array);
  return array[coins.length][amount];
}
//console.log("Min ways to choose the amount is: ", coinChangeDP([1, 3, 4], 5));

//<---------------------------------------------Bottom-up solution--------------------------------------------------------->
function coinsChangeWays(coins, amount) {
  var array = [];
  var row = 0;
  var col = 0;

  //creating rows of an 1D array
  for (let j = 0; j <= coins.length; j++) {
    array.push([0]);
  }
  //creating a 2D array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < 6; j++) {
      array[i][j] = 0;
    }
  }
  //if amount = 0, there is only 1 way to choose the number of coins
  for (let row = 0; row <= coins.length; row++) {
    array[row][0] = 1;
  }

  for (row = 1; row <= coins.length; row++) {
    for (col = 1; col <= amount; col++) {
      let coin = coins[row - 1];
      // array[row][col] = array[row][col-1]+1;
      if (coin <= col) {
        array[row][col] = array[row - 1][col] + array[row][col - coin];
      } else {
        array[row][col] = array[row - 1][col];
      }
    }
  }

  //console.log('Ways to choose the amount', array[coins.length][amount]);
  //console.log(array.length);
}

//coinsChangeWays([1,2,3], 5);


var s = '1234';
let reverseString = s.split('').reverse().join('');
 console.log();

    // for(let i=0; i<s.length;i++){
    //   // console.log(s[i]);
    //   reverseString = s[i]+reverseString;
    // }
    console.log(reverseString);


