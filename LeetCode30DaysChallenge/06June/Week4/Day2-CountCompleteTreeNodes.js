// Count Complete Tree Nodes
// Link: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3369/
// Given a complete binary tree, count the number of nodes.

// Note:

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Example:

// Input: 
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// Output: 6


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class TreeNode{
    constructor(val, left, right){
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


var countNodes = function(root) {
    if(root == null){
        return 0;
    }
    let leftHeight = 1;
    let rightHeight = 1;
   
    //Get Height of left tree
    while(root.left){
        root = root.left;
        leftHeight++;
    }
    console.log(leftHeight);
    //Get height of right tree
    while(root.right){
        root = root.right;
        rightHeight++;
    }
     console.log(rightHeight);
    
    if(leftHeight === rightHeight){
        return (Math.pow(2, leftHeight)-1);
    }
         
    
    return 1+countNodes(root.left)+countNodes(root.right);
};

var maple = new TreeNode(1,2,3);
maple.left = new TreeNode(2,4,5);
maple.right = new TreeNode(3,6,null);

console.log(maple);

console.log(countNodes(maple));
