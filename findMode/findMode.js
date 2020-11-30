/*********************** Find Mode in Binary Search Tree ************************************
*
* Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
* 
* Assume a BST is defined as follows:
* 
* The left subtree of a node contains only nodes with keys less than or equal to the node's key.
* The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
* Both the left and right subtrees must also be binary search trees.
*  
* 
* For example:
* Given BST [1,null,2,2],
* 
*    1
*     \
*      2
*     /
*    2
*  
* 
* return [2].
* 
* Note: If a tree has more than one mode, you can return them in any order.
* 
* Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
* 
*/

const findMode = function(root) {
  let countStore = {};
  let max = 0;
  let modes = [];
  
  const traversal = (node) => {
    if (node === null) {
      return;
    }
    if (node.left) {
      traversal(node.left);
    }
    if (countStore[node.val] === undefined) {
      countStore[node.val] = 1;
    } else {
      countStore[node.val] += 1;
    }
    if (node.right) {
      traversal(node.right);
    }
  }
  traversal(root);

  for (let count in countStore) {
    if (countStore[count] > max) {
      max = countStore[count];
    }
  }
    
  for (let count in countStore) {
    if (countStore[count] === max) {
      modes.push(count);
    }
  }
  return modes;
};