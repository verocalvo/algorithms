var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < m + n; i += 1)  {
    if (nums2.length === 0) {
      break;
    }
    if (nums1[i] === 0) {
      nums1[i] = nums2[0];
      nums2.splice(0, 1);
    }
  }
  return nums1.sort((a, b) => {
    return a - b;
  });
};