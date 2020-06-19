// function Node(value) {
//     this.value = value;
//     // this.left = null;
//     // this.right = null;
// }

// function insertNode(tree, value) {
//     var node = tree,
//         key;
//     while (node.value !== value) {
//          key = value < node.value ? 'left' : 'right';
//          if (!node[key]) {
//              node[key] = new Node(value);
//              break;
//          }
//          node = node[key];
//     }
//     return tree;
// }
// //[8, 10, 12, 5, 3, 6],
// var array = [1,2,3,4],
//     tree = array.reduce((t, v) => t ? insertNode(t, v) : new Node(v), null);

// console.log(tree);

var binary = {};
//var arr = [8,5,10,3,6,12];
var arr = [1,2,3,4];

function makeBinary(binary,number){
  if(binary.value === undefined){
    binary.value = number;
  }else if(number > binary.value){
    if(binary.right === undefined){
      binary.right = {value:number};  
    }else{
      binary.right = makeBinary(binary.right,number);
    }
  }else{
    if(binary.left === undefined){
      binary.left = {value:number};  
    }else{
      binary.left = makeBinary(binary.left,number);
    }
  }
  return binary;
}

for(let i in arr){
  makeBinary(binary,arr[i]);
}

console.log(binary);