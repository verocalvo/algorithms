var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    if (target < nums[i] || target === nums[i]) {
      return i;
    }
  }
  return nums.length;
};