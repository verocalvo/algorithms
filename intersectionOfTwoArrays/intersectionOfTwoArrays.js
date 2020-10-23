/*
* Intersection of Two Arrays
* 
* Given two arrays, write a function to compute their intersection.
* 
* Example 1:
* 
* Input: nums1 = [1,2,2,1], nums2 = [2,2]
* Output: [2]
*
* Example 2:
* 
* Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
* Output: [9,4]
*
* Note:
* 
* Each element in the result must be unique.
* The result can be in any order.
*/

// **************************************QUICK AND DIRTY******************************************* //

// var intersection = function(nums1, nums2) {
//   let result = [];
//   for (let i = 0; i < nums1.length; i += 1) {
//     if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
//       result.push(nums1[i]);
//     }
//   }
//   return result;
// };


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