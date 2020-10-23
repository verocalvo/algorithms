/*
* Sum of Left Leaves
*
* Find the sum of all left leaves in a given binary tree.
*
* Example:
*
*    3
*   / \
*  9  20
*    /  \
*   15   7
*
* There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*
*/

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