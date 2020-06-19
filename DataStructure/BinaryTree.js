class TreeNode {

    constructor(data, left, right) {
        this.data = (data === undefined ? 0 : data);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    // insert(val){
       

    //     if(val<this.data && this.left){
    //         this.left.this.insert(val);
    //     }
    //     else if(val<this.data){
    //         this.left = new TreeNode(val);
    //     }
    //     else if(val>this.data && this.right){
    //         this.right.this.insert(val);
    //     }
    //     else if(val>this.data){
    //         this.right = new TreeNode(val);
    //     }
    // }
    
    
}



var maple = new TreeNode(4,2,7);
maple.left= new TreeNode(2,1,3);
maple.right= new TreeNode(7,5,null);

maple.insert(-10);
console.log(maple);

// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. 
//It is guaranteed that the new value does not exist in the original BST.
// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. 
//You can return any of them
var insertIntoBST = function(root, val) {
    if(root === null) return new TreeNode(val);
    
    var currentNode = new TreeNode();
    currentNode = root;
    
    while(true){
        if(val<currentNode.val&& currentNode.left){
                  currentNode = currentNode.left;
        }else if(val<currentNode.val && !currentNode.left){
                  currentNode.left = new TreeNode(val);
                  break;
        }else if(val> currentNode.val && currentNode.right){
                  currentNode = currentNode.right;
        }else if(val> currentNode.val && !currentNode.right){
                  currentNode.right = new TreeNode(val);
                  break;
        }
    }
    
    return root;
};


var searchBST = function(root, val) {
    console.log(root);
    if(root === null) return root;
    // var node = new TreeNode();
    // node = root;
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

 //console.log(searchBST(maple, 7));