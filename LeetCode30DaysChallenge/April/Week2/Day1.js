//Link: https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/529/week-2/3290/
//<---------------------------------Problem: Middle of the Linked List---------------------------->
// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.
// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Note:

// The number of nodes in the given list will be between 1 and 100.
function ListNode(val) {
   this.val = val;
   this.next = null; 
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    getFirst(){
        if(!this.head) return null;
        return this.head;
    }
    insertFirst(data){
        this.head = new ListNode(data, this.head);
       }
    getLast(){
        if(!this.head){
            return null;
        }
        let temp = this.head;
        while(temp){
            if(!temp.next){
                return temp;
            }
            temp = temp.next;      
            }
        return temp;
       }

       insertLast(data){
        if(!this.head){
            return null;
        }
        let lastNode = this.getLast();
        if(lastNode){
             //There is some existing node in the LIkned list
             lastNode.next = new ListNode(data);
        }
        else{
            //The chain is empty
            this.head = new ListNode(data);
        }
    }
 
}

var middleNode = function(head){
    let slow = head.getFirst();
    let fast = head.getFirst();

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
const nodeOne = new ListNode(1);
const list = new LinkedList();
// console.log(list.head);
list.head = nodeOne;

list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

console.log('List: ',list);
console.log('Middle node: ',middleNode(list));
