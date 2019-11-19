class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }
    insert(data){
       const node = new Node(data, this.head);
       this.head = node;
    }
    size(){
        let node = this.head;
        let counter = 0;
        while(node){
          counter++;
          node = node.next;
        }
        return counter;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head){
            return ;
        }
        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }
    clear(){
        return this.head = null;
    }
    removeFirst(){
        if(!this.head){
            return ;
        }
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head && this.size()===1){
            return ;
        }
        
    }
}

var nodeOne = new Node(5);
var list = new LinkedList();
list.head = nodeOne;

list.insert(15);
// console.log(list.head.data);
// console.log(list.head.next);
// console.log(list);
// console.log(list.size());
// console.log('Fisrt node', list.getFirst());
// console.log('Last node', list.getLast());
console.log('Clear node', list.clear());
