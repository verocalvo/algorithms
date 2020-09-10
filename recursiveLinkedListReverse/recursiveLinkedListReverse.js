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