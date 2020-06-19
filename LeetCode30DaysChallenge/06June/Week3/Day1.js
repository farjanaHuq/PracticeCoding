// Problem: Search in a Binary Search Tree
// Link: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3361/

// Solution
// Given the root node of a binary search tree (BST) and a value. You need to find the node in 
// the BST that the node's value equals the given value. Return the subtree rooted with that node. 
// If such node doesn't exist, you should return NULL.

// For example, 

// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3

// And the value to search: 2
// You should return this subtree:

//       2     
//      / \   
//     1   3
// In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

// Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

class TreeNode {
    constructor(data, left, right) {
        this.data = (data===undefined ? 0 : data);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}


var maple = new TreeNode(4,2,7);
maple.left = new TreeNode(2,1,3);
maple.right = new TreeNode(7,5,null);

//console.log(maple);

var searchBST = function(root, val) {
    while(root){
      if(root.data === val){
             return root;
      }else if(root.data > val){
             root = root.left;
      }else{
             root = root.right;
       }
    }
    return root;
 };

 console.log(searchBST(maple, 7));