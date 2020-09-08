var deleteDuplicates = function(head) {
  let start = head;
  if (head === null) {
    return null;
  }
  while (head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return start;
};