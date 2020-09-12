var searchBST = function(root, val) {
  let subtree = null;
  if (root === null) {
    return subtree;
  }
  let traversal = (node) => {
    if (node.val === val) {
      subtree = node;
    }
    if (node.left) {
      traversal(node.left);
    }
    if (node.right) {
      traversal(node.right);
    }
  }
  traversal(root);
  return subtree;
};