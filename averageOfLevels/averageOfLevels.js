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