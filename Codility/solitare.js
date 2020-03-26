a= [1, -2, 0, 9, 0, -1, -2]
a1 = [0,-1,-2,-3,-4,-5,-6,-7]
//Strategy
//1. Greedy algprithm Fails because of negetive numbers
//2. Dynamic Programming: For each move, take max of 2 choices:
//a. Starting value + val at that col
//b. Last value at that col
//We can only move up to 6 spots each time

//Each new row means considering 1 new val from our array
//Each new column means considering the best choice from the new value in the array

// a[0] =1
// [1]=                  [1,   -infinity, -infinity,      -infinity,       -infinity,-infinity ]
// startVal = 1, c0l:0   [1,    -1,       1,              10,             0,       -1]
// startVal = -1  col:1  [1,    -1,       max[-1+0,1]=1,   max[-1+10, 10]=10,    max[-1+0,0]=0,    max[-1+(-1),-1]=-1]
// startVal = 1  col:2   [1,    -1,         1,             max[-1+10, 10]=10,    max[-1+0,0]=0,    max[-1+(-1),-1]=-1]
// startVal = 10  col:3  [1,    -1,         1,             10,                    max[-1+10,0]=9,   max[10+(-1),-1]=8]
// startVal = 9  col:4   [1,    -1,         1,             max[-1+10, 10]=10,    max[-1+9,9]=9,    max[9+(-1),-1]=8]
//- Look 1 move ahead
//-Each move, you make choice to get maximum advantage ('Greedy')
//1+? of remaining numbers gives us maximum?
//1+9 +? gives us maximum?

//Issue is : we get negetive number, we don't get to the end
//1+9-1+?
//1+9-1-2