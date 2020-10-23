/*
* Average of Levels in Binary Tree
* Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
* Example 1:
* Input:
*     3
*    / \
*   9  20
*     /  \
*    15   7
* Output: [3, 14.5, 11]
* Explanation:
* The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
* Note:
* The range of node's value is in the range of 32-bit signed integer.
*/

var averageOfLevels = function(root) {
  if (root === null) {
    return 0;
  }
  let result = [];
  let storage = [root];
  while (storage.length) {
    let sum = 0;
    let temp = [];
    for (let node of storage) {
      if (node.left) {
        temp.push(node.left);
      }
      if (node.right) {
        temp.push(node.right);
      }
      sum += node.val;
    }
    result.push(sum / storage.length);
    storage = temp;
  }
  return result;
};