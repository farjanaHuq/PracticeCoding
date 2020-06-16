class TreeNode {
    constructor(data, left, right) {
        this.data = (data===undefined ? 0 : data);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
    insert(val){
        if(val < this.data && this.left){
            return this.left.insert(val);
        }else if(val < this.data && !this.left){
            return this.left = new TreeNode(val);
        }else if(val > this.data && this.right){
            return this.right.insert(val);
        }else if(val > this.data && !this.right){
            return this.right = new TreeNode(val);
        }
        
    }
    
}


var maple = new TreeNode(4,2,7);
maple.left = new TreeNode(2,1,3);
maple.right = new TreeNode(7,5,null);

//console.log(maple);

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

 console.log(searchBST(maple, 7));