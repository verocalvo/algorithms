var reverseList = function(head) {
  let node = head;
  let previous = null;
    
  while (node) {
    let save = node.next;
    node.next = previous;
    previous = node;
    node = save;      
  }
  return previous;
};