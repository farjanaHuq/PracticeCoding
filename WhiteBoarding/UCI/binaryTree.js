class Node{
    constructor(val){
        this.value =val;
        this.left=null;
        this.right = null;
    }
}



var node1 = new Node(15);
node1.left = new Node(10);
node1.right = 20;
node1.left.right = 9;
console.log(node1);

var node2 = new Node(15);
node2.left = new Node(10);
node2.right = 20;
node2.left.left = 9;
console.log(node2);

function checkNode(node1, node2){
     return(node1.val===node2.val)&&checkRight(node1,node2)&&checkLeft(node1,node2)
}

function checkRight(node1,node2){
    return(node1.right===null && node2.right===null)||(node1.right!==null&&node2.right!==null)
}

function checkLeft(node1,node2){
    return(node1.left===null && node2.left===null)||(node1.left!==null&&node2.left!==null)
}
//DFS
function isSame(tree1,tree2){
    return checkNode(tree1,tree2)&&isSame(tree1.left, tree2.left)&&isSame(tree1.right,tree2.right);
}


//BFS
function isSame(tree1,tree2){
  let tree1Arr =[tree1];
  let tree2Arr =[tree2];

  while(tree1Arr.length||tree2Arr.length){
      if(tree1.length!==tree2Arr.length)
      {
          return false;
      }
      const newTree1=[];
      const newTree2=[];
      for(var i=0; i<tree1Arr.length;i++){
          if(!checkNode(tree1Arr[i], tree2Arr[i]))
          {
              return false;
          }
          if(tree1.left){
              newTree1.push(tree1.left);
              newTree2.push(tree2.left);
          }
          if(tree1.right){
            newTree1.push(tree1.right);
            newTree2.push(tree2.right);
        }
      } 
      tree1Arr = newTree1;
      tree2Arr = newTree2;
    }
    return true;
}