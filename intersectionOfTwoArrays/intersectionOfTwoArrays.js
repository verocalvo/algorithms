// **************************************QUICK AND DIRTY******************************************* //

var intersection = function(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i += 1) {
    if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }
  return result;
};


// *******************************IMPROVED RUNTIME COMPLEXITY************************************* //

let iterator = (set1, set2) => {
  let array = [];
  set1.forEach((num) => {
    if (set2.has(num)) {
      array.push(num);
    }
  });
  return array;
};

var intersection = function(nums1, nums2) {
  let left = new Set(nums1);
  let right = new Set(nums2);
  
  if (left.length > right.length) {
    return iterator(right, left);
  } else {
    return iterator(left, right);
  }
};