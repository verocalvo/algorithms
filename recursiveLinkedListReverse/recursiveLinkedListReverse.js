/*
* Reverse Linked List
* 
* Reverse a singly linked list.
* 
* Example:
* 
* Input: 1->2->3->4->5->NULL
* Output: 5->4->3->2->1->NULL
* Follow up:
* 
* A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

var reverseList = function(head) {
  let node = head;
  let previous = null;
    
  let recursive = (currentNode) => {
    if (!currentNode) {
      return;
    }
    let save = node.next;
    node.next = previous;
    previous = node;
    node = save;
    recursive(node);    
  }
  recursive(node);
  return previous;
};