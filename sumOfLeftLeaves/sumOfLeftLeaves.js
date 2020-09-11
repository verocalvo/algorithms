var sumOfLeftLeaves = function(root) {
  let sum = 0;
  let left = false;
  if (root === null) {
    return sum;
  }
  let traversal = (node) => {
    if (node.left) {
      left = true;
      traversal(node.left);
    }
    if (node.right) {
      left = false;
      traversal(node.right);
    } else if (left) {
      left = false;
      sum += node.val;
    }
  }
  traversal(root);
  return sum;
};