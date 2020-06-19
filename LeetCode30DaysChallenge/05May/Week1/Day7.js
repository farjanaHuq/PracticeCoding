//Problem: Cousins in Binary Tree
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3322/

// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes
// in the tree. Return true if and only if the nodes corresponding to the values x and y are cousins.

// Example 1:
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:
// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:
// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false

// Note:
// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  node = new Node();
  isSibling(root, x, y) {
    if (root === null) {
      return null;
    }
    if (
      (root.left == x && root.right == y) ||
      (root.left == y && root.left == x) ||
      this.isSibling(root.left, x, y) ||
      this.isSibling(root.right, x, y)
    );
  }
}
var x,y;
var root = [1, 2, 3, 4];
var maple = new BinaryTree();
maple.node = new Node(root[0]);
maple.node.left = new Node(root[1]);
x=maple.node.right = new Node(root[2]);
y=maple.node.left.left = new Node(root[3]);
console.log(maple);
console.log(maple.isSibling(maple.node, x, y))
